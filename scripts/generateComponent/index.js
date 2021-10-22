// index.js`
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
const {
	componentTemplate,
	globalRegisterImportTemplate,
	globalRegisterExportTemplate
} = require('./template')

log('请输入要生成的组件名称或路径文件名称、会生成在 components/ 目录下, 如需生成全局组件, npm run new:comp [g], 则会再 components/ 目录生成index.js')
let componentName = ''
let isGlobal = false
let dirPath = ''
process.stdin.on('data', async chunk => {
	const inputName = String(chunk).trim().toString()
	// 全局组件
	if (process.argv.slice(2)[0] == 'g') {
		isGlobal = true
	}
	if (inputName.includes('/')) {
		const inputArr = inputName.split('/')
		componentName = inputArr[inputArr.length - 1]
		dirPath = inputArr.splice(0, inputArr.length - 1).join('/')
	} else {
		dirPath = inputName
		componentName = inputName
	}
	if (!componentName) {
		errorLog('生成路径错误，文件名不能为空！')
		return
	}

	/**
     * 组件目录路径
     */
	const componentDirectory = resolvePath('../src/components', dirPath)

	/**
     * vue组件路径
     */
	const componentVueName = resolvePath(componentDirectory, `${componentName}.vue`)

	if (fs.existsSync(componentVueName)) {
		errorLog(`${componentName}组件文件已存在，请重新输入`)
		return
	}
	if (!fs.existsSync(componentDirectory)) {
		log(`正在生成 component 目录 ${componentDirectory}`)
		await dotExistDirectoryCreate(componentDirectory)
	}
	try {
		log(`正在生成 vue 文件 ${componentVueName}`)
		await generateFile(componentVueName, componentTemplate(componentName))
		if (isGlobal) {
			log(`正在注册全局组件文件 ${componentName}`)
			await addGlobalComponent(componentName)
		}
		successLog('组件生成成功')
	} catch (e) {
		errorLog(e.message)
	}

	process.stdin.emit('end')
})
process.stdin.on('end', () => {
	log('exit')
	process.exit()
})

// 添加全局注册
function addGlobalComponent(fileName) {
	const file = resolvePath('../src/components', 'index.js')
	return new Promise((resolve, reject) => {
		if (fs.existsSync(file)) {
			fs.readFile(file, 'utf-8', (err, data) => {
				if (err) {
					errorLog(err.message)
					reject()
				} else {
					let dataStr = data.toString()
					let exportStr, importStr
					if (!dataStr) {
						emptyComponentAdd(file, fileName).then(() => {
							resolve()
						})
						return
					}
					let dataList = dataStr.split('export')
					if (dataList && dataList.length == 2) {
						importStr = dataList[0]
						importStr += globalRegisterImportTemplate(dirPath, fileName)
						exportStr = 'export' + dataList[1]
						exportStr = exportStr.replace(/}/, globalRegisterExportTemplate(fileName))
						let writeStr = importStr + '\n' + exportStr
						writeDataToFile(file, writeStr).then(() => {
							resolve()
						})
					} else {
						errorLog('components/index.js格式不规范,请调整为标准格式后重试')
						reject()
					}
				}
			})
		} else {
			emptyComponentAdd(file, fileName).then(() => {
				resolve()
			})
		}
	})

	function emptyComponentAdd(file, fileName) {
		let importStr = globalRegisterImportTemplate(dirPath, fileName)
		let exportStr = `export default (Vue) => {\n${globalRegisterExportTemplate(fileName)}`
		let writeStr = importStr + '\n' + exportStr
		return writeDataToFile(file, writeStr)
	}

	function writeDataToFile(file, data) {
		return new Promise((resolve, reject) => {
			fs.writeFile(file, data, {
				'flag': 'w'
			}, (err) => {
				if (err) {
					errorLog(err.message)
					reject()
				}
				successLog('全局注册成功!')
				resolve()
			})
		})

	}
}
