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
	storeTemplate
} = require('./template')

log('请输入要生成的 store 名称、默认生成在 store/modules/ 目录下')

let componentName = ''

process.stdin.on('data', async chunk => {
	// store名称
	const inputName = String(chunk).trim().toString()

	// 获取要创建的store名称
	if (inputName.includes('/')) {
		const inputArr = inputName.split('/')
		componentName = inputArr[inputArr.length - 1]
	} else {
		componentName = inputName
	}

	if (!componentName) {
		errorLog('生成文件错误，文件名不能为空！')
		return
	}

	// store用小驼峰
	componentName = componentName.substring(0, 1).toLowerCase() + componentName.substring(1)
	// store跟页面路径
	const storePath = resolvePath('../src', 'store')
	if (!fs.existsSync(storePath)) {
		log(`正在生成 store 文件夹 ${storePath}`)
		await dotExistDirectoryCreate(storePath)
	}
	// modules跟页面路径
	const componentPath = resolvePath(storePath, 'modules')
	if (!fs.existsSync(componentPath)) {
		log(`正在生成 modules 文件夹 ${componentPath}`)
		await dotExistDirectoryCreate(componentPath)
	}
	// store文件
	const storeFile = resolvePath(componentPath, `${componentName}.js`)

	// 判断要创建的store文件是否存在
	const hasComponentExists = fs.existsSync(storeFile)
	if (hasComponentExists) {
		errorLog(`${inputName}文件已存在，请重新输入`)
		return
	}
	try {
		log(`正在生成 store 文件 ${storeFile}`)
		await generateFile(storeFile, storeTemplate(componentName))
		log(`正在注册 store 文件 ${storeFile}`)
		successLog('store生成成功')
	} catch (e) {
		errorLog(e.message)
	}

	process.stdin.emit('end')
})
process.stdin.on('end', () => {
	log('exit')
	process.exit()
})
