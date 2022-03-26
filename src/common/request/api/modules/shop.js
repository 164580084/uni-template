import {get,post} from '@/common/http'

// crm  ${BASEURL}
// 获取商品-菜单列表
export const getGoodsList = (data) => get('/api/v1/goods/list', data)


// 获取广告图
// export const getBannersCode = (data) => post(`/api/v1/banner/list/${data}`)

