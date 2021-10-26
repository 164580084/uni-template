// template.js
module.exports = {
	viewTemplate: compoenntName => {
		return `<template>
	<page-container>
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">${compoenntName}</block>
		</cu-custom>
	</page-container>
</template>

<script>
export default {
	data() {
		return {}
	}
}
</script>


<style lang="scss" scoped>

</style>
`
	},
	viewRouterTemplate: (compoenntName, dirName) => `{
		path:  '${dirName}',
		style: {
			navigationStyle: 'custom',
		}
	}
`
}

// requiresAuth: true,
// 		path: '${dirName}',
// 		name: '${compoenntName}',
// 		meta: {
// 			title: '${compoenntName}'
// 		}
