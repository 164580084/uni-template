import axios from 'axios'
import { APIBASEURL } from './config'

const service = axios.create({
	baseURL: APIBASEURL,
	timeout: 6000
})

// request拦截器,在请求之前做一些处理
service.interceptors.request.use(
	config => {
		// if (store.state.token) {
		//     // 给请求头添加user-token
		config.headers['Authorization'] = uni.getStorageSync('token')
		// }
		console.log('请求拦截成功')
		return config
	},
	error => {
		console.log(error) // for debug
		return Promise.reject(error)
	}
)
// 响应后
service.interceptors.response.use(
	response => {
		if (response.status == 200) {
			return Promise.resolve(response.data)
		} else {
			return Promise.reject(response)
		}
	},
	error => {
		if (400 <= error.response.status < 500) {
			console.log('处理')
		} else {
			console.log('服务器开了小差！')
			return Promise.reject(error)
		}
	}
)

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
	return new Promise((resolve, reject) => {
		service.get(url, {
			params: params
		}).then(res => {
			resolve(res.data);
		}).catch(err => {
			reject(err.data)
		})
	});
}

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
 export function post(url, params) {
    return new Promise((resolve, reject) => {
		service.post(url, JSON.stringify(params))
        .then(res => {
            resolve(res.data);
        })
        .catch(err =>{
            reject(err.data)
        })
    });
}