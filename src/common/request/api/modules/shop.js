import request from '@/common/http'

// crm  ${BASEURL}
// 获取商品-菜单列表
export const getGoodsList = (data) => {
	return request({
		url: '/api/v1/goods/list',
		method: 'get',
		data
	})
}
