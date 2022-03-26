import { IMG_BASE_URL } from './config'

const _U = {
    getTime() {
        var myDate = new Date(); //实例一个时间对象；
        var year = myDate.getFullYear(); //获取系统的年；
        var month = myDate.getMonth() + 1; //获取系统月份，由于月份是从0开始计算，所以要加1
        var data = myDate.getDate(); // 获取系统日，
        var h = myDate.getHours(); //获取系统时，
        var m = myDate.getMinutes(); //分
        var s = myDate.getSeconds(); //秒

        if (h < 10) {
            h = "0" + h;
        }
        if (m < 10) {
            m = "0" + m;
        }
        if (s < 10) {
            s = "0" + s;
        }
        return `${h}:${m}:${s}`
    }
}


export default {
    ..._U
}
