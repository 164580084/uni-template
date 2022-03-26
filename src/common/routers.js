/**
 * 路由
 */
const _U = {
	/**
	 * url 跳转链接
	 * data 跳转参数
	 */
	goto(url, data) {
		url += (url.indexOf('?') < 0 ? '?' : '&') + this.param(data)
		uni.navigateTo({
			url
		})
	},

	param(data) {
		let url = ''
		for (var k in data) {
			let value = data[k] !== undefined ? data[k] : ''
			url += '&' + k + '=' + encodeURIComponent(value)
		}
		return url ? url.substring(1) : ''
	}
}
export default {
	..._U
}
