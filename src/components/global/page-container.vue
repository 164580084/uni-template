<template>
	<view>
		<slot name="header">

		</slot>
		
		<view class="page-content">
			<slot name="center">
			</slot>
		</view>
	</view>
</template>
<style lang="scss">
	.page-content{
		height: 100vh;
		padding-bottom: 0;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
	}
</style>