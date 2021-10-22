// template.js
module.exports = {
	RequestTemplate: compoentName => {
		return `/**
 * @name ${compoentName.charAt(0).toUpperCase() + compoentName.slice(1)} Request
 */

// import http from './http.js'
// import { BASEURL } from './config.js'
`
	}
}
