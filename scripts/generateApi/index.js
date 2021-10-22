// index.js`
// 导入公用方法
const {
	generateFile,
	fs,
	log,
	resolvePath,
	successLog,
	errorLog
} = require('../common.js')
const {
	RequestTemplate
} = require('./template')

log('请输入要生成的 API 名称、默认生成在 common/request/ 目录下')

let componentName = ''

process.stdin.on('data', async chunk => {
	// API 名称
	const inputName = String(chunk).trim().toString()

	// 获取要创建的 API 名称
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

	/**
     * API JS 路径
     */
	const componentVueName = resolvePath('../src/common/request/', `${componentName}.js`)

	if (fs.existsSync(componentVueName)) {
		errorLog(`${componentName} API 文件已存在，请重新输入`)
		return
	}
	try {
		log(`正在生成 API 文件 ${componentVueName}`)
		await generateFile(componentVueName, RequestTemplate(componentName))
		successLog('API 文件生成成功')
	} catch (e) {
		errorLog(e.message)
	}

	process.stdin.emit('end')
})
process.stdin.on('end', () => {
	log('exit')
	process.exit()
})
