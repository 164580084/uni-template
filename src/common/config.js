let API_BASEURL
// let proType = process.env.NODE_ENV == 'production'
let proType = true
if (proType) {
	// 正式api
	API_BASEURL = 'https://api.shijianqiyu.cn'
} else {
	// 测试api
	API_BASEURL = 'https://test.api.shijianqiyu.cn'
}

export const APIBASEURL = API_BASEURL;
