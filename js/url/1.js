/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-22 19:40:11
 * @LastEditTime: 2022-05-22 22:10:28
 * @Description: 
 */
// https： 协议   security 更加安全的http
// www.wc.com： 域名  ->  ip
// /login：  path
// a=1&b=2&c=3：  查询参数
// parse 解析
function parseParam(url) {
    const paramsStr = /.+\?(.+)$/.exec(url)[1];   // a=1&b=2&c=3
    // console.log(paramsStr);
    const paramsArr = paramsStr.split('&');
    // console.log(paramsArr)
    let paramsObj = {};
    paramsArr.forEach(param => {
        if (/=/.test(param)) {
            let [key, val] = param.split('=');
            // prototype. hasOwnproperty false
            if (paramsObj.hasOwnProperty(key)) {
                // \d [0-9]     开始到结尾都是用数字组成
                if (/^\d+$/.test(val)) {
                    val = parseInt(val);
                }
                paramsObj[key] = [].concat(paramsObj[key], val);
            } else {
                // 解码
                val = decodeURIComponent(val);
                // \d [0-9]     开始到结尾都是用数字组成
                if (/^\d+$/.test(val)) {
                    val = parseInt(val);
                }
                paramsObj[key] = val;
            }

            // [2, true]
        } else {
            paramsObj[param] = true
        }
    })
    // {
    //     a:1,
    //     b:2,
    //     3:3
    // }
    return paramsObj;
}
// url 安全性 文字转码
// 中文字符，特殊字符，http编码
let url = 'https//www.wc.com/login?a=1&b=2&c=3&d&e=9&b=0&name=%E8%BF%9C%E9%87%8E';    // %E8%BF%9C%E9%87%8E -> 远野
console.log(parseParam(url));
// 解析URL 参数到一个对象