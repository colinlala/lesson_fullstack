/**
 * @author lala
 * @func 根据path判断是否在数组中
 * @params {path string}
 * @return boolean
 * 
*/
export const isPathPartlyExisted = (path) => {
    // 1. path 全部匹配 /cities
    // 2. path 多了 /homedetail/:id
    const arr = ['/cities', '/homedetail'];
    arr.forEach(item => {
        // 完全匹配
        if (item === path) {
            return true
        }
        // 部分匹配
        if(path.lastIndexOf('/') !== 0){ // 表示动态路由
            // 正则 path 的第二个 / 前面的部分
            // \/匹配斜杠，\w表示一个字符，+一个或多个，
            const reg = /^(\/[\w]+)\//
            const matchArr = path.match(reg)
            // 数组的第二位是
            const partlyPath = matchArr[1]?matchArr[1]:''
            if(partlyPath){
                return partlyPath === item
            }
        }
    })
    return false
}