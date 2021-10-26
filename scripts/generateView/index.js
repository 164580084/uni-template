// index.js
// 导入公用方法
const {
	dotExistDirectoryCreate,
	generateFile,
	fs,
	log,
	resolvePath,
	successLog,
	errorLog
} = require('../common.js')
// 导入模板
const {
	viewTemplate,
	viewRouterTemplate
} = require('./template')

log('请输入要生成的页面名称、列如分包:  subpackage/index/index 则会生成index文件夹再生成index.vue(以此类推),subpackage则是分包主文件夹')

let componentName = '' // 组件名
let dirName = '' // 目录名
process.stdin.on('data', async chunk => {
	// 组件名称
	let dir = ''
	let inputArr = []
	const inputName = String(chunk).trim().toString()
	// 获取组件名
	if (inputName.includes('/')) {
		inputArr = inputName.split('/')
		dirName = inputArr.join('/')
		componentName = inputArr[inputArr.length - 1]
	} else {
		componentName = inputName
		dirName = inputName
	}
	// Vue页面组件路径
	if (inputArr.length > 1) {
		dir = dirName.split('/').filter((o, i) => i < dirName.split('/').length - 1).join('/')
	} else {
		dir = dirName
	}
	if (!componentName) {
		errorLog('生成路径错误，文件名不能为空！')
		return
	}
	// const componentPath = resolvePath(`../src/pages/${dir}`)
	const componentPath = resolvePath(`../src/${dir}`)
	// vue文件
	const vueFile = resolvePath(componentPath, `${componentName}.vue`)
	// 判断组件文件夹是否存在
	const hasComponentExists = fs.existsSync(resolvePath(componentPath, `${componentName}.vue`))
	if (hasComponentExists) {
		errorLog(`${inputName}页面组件已存在，请重新输入`)
		return
	}
	try {
		if (!fs.existsSync(resolvePath(componentPath))) {
			log(`正在生成 目录 ${componentPath}`)
			await dotExistDirectoryCreate(componentPath)
		}
	} catch (e) {
		errorLog(e.message)
	}

	try {
		log(`正在生成 vue 文件 ${vueFile}`)
		await generateFile(vueFile, viewTemplate(componentName))
		log(`正在注册路由 ${componentName}`)
		await addRouter(componentName)
		successLog('页面生成成功')
	} catch (e) {
		errorLog(e.message)
	}

	process.stdin.emit('end')
})
process.stdin.on('end', () => {
	log('exit')
	process.exit()
})

async function addRouter(fileName) {
	let reg
	let file
	let routerListItem
	dirName = dirName.split('/')
	// 生成主包路由
	if (dirName[0] == 'pages') {
		reg = /(module.exports\s*=\s*\[)((.|\s)*?)\]/
		file = resolvePath('../src/page_modules', 'home.js')
	} else {
		reg = /(pages\s*:\s*\[)((.|\s)*?)\]/
		file = resolvePath('../src/subpackage_modules', `${dirName[0]}.js`)
	}
	return new Promise((resolve, reject) => {
		if (fs.existsSync(file)) {
			fs.readFile(file, 'utf-8', (err, data) => {
				if (err) {
					errorLog(err.message)
					reject()
				} else {
					let dataStr = data.toString()
					if (!dataStr) {
						emptyIndexAdd(file, fileName).then(() => {
							resolve()
						})
					} else {
						let routerList = dataStr.match(reg)
						if (routerList && routerList.input) {
							let dir = [...dirName]
							// 生成主包路由
							if (dirName[0] == 'pages') {
								dir = `${dir.join('/')}`
							} else {
								if (dir.length > 1) {
									dir.splice(0, 1)
								}
								dir = dir.join('/')
							}
							routerListItem = routerList[1] + routerList[2] + (routerList[2].trim()
								? ',' : '') + viewRouterTemplate(fileName, dir) + ']'
							dataStr = dataStr.replace(reg, routerListItem)
							writeDataToFile(file, dataStr).then(() => {
								resolve()
							})

						} else {
							errorLog(`${dirName[0]}页面结构不正确,本次注册路由失败!`)
							reject()
						}
					}
				}

			})
		} else {
			emptyIndexAdd(file, fileName).then(() => {
				resolve()
			})
		}
	})
	// path: '${dir.join('/')}',
	// requiresAuth: true,
	// name: '${fileName}',
	// meta: {
	//     title: '${fileName}'
	// }

	function emptyIndexAdd(file, fileName) {
		let dir = [...dirName]
		if (dir.length > 1) {
			dir.splice(0, 1)
		}
		let importStr = `module.exports = [{
	root: '${dirName[0]}',
	pages: [{
		path: '${dir.join('/')}',
		style: {
			navigationStyle: 'custom',
		}
	}]
}]
`
		return writeDataToFile(file, importStr)
	}

	function writeDataToFile(file, data) {
		return new Promise((resolve, reject) => {
			fs.writeFile(file, data, {
				'flag': 'w'
			}, (err) => {
				if (err) {
					errorLog(err.message)
					reject(err.message)
				}
				successLog('路由注册成功!')
				resolve()
			})
		})

	}
}
