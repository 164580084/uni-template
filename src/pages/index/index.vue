<template>
	<page-container>
		<view slot="header">
			<cu-custom bgColor="bg-orange" :isBack="false">
				<block slot="content">个人中心</block>
			</cu-custom>
		</view>
		<view slot="center">
			<view v-for="item in 100" @click='jump()'>
				adadasdasd
			</view>
		</view>
	</page-container>
</template>

<script>
	export default {
		data() {
			return {
				goods: []
			}
		},
		onLoad() {
			this.init()
		},
		methods: {
			async init() {
				this.goods = await this.$request.getGoodsList({
					store_id: 1
				});
				console.log(this.goods)
			},
			jump(){
				console.log(this.$routers)
				this.$routers.goto('/pages/detail/detail',{id:2})
			}

		}
	}
</script>
