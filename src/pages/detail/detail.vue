<template>
	<page-container>
		<view slot="header">
			<cu-custom bgColor="bg-white" :isBack="true">
				<block slot="backText"></block>
				<block slot="content">detail</block>
			</cu-custom>
		</view>
		<view slot="center">
			detail
		</view>
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
