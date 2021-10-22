// template.js
module.exports = {
	storeTemplate: compoenntName => {
		return `module.exports = {
	state: {
		name: '${compoenntName}'
	}
}
`
	}
}
