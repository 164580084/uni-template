// template.js
module.exports = {
	componentTemplate: compoentName => {
		return `<template>
	<view class="${compoentName}">

	</view>
</template>

<script>
export default {
	name: '${compoentName.charAt(0).toUpperCase() + compoentName.slice(1)}',
	props: {

	}
}
</script>

<style lang="scss" scoped>

</style>
`
	},
	globalRegisterImportTemplate: (dirPath, compoentName) => `import ${compoentName} from './${dirPath}/${compoentName}'`,
	globalRegisterExportTemplate: compoentName => `	Vue.component(${compoentName}.name, ${compoentName})\n}`
}
