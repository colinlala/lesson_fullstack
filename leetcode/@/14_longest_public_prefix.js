<<<<<<< HEAD
// 最长公共前缀
/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    if(strs.length == []){
        return ""
    }else{
        let res = ""
        let max = strs[0]
        let min = strs[0]
        for(var i = 0;i<strs.length-1;i++){
            min = min > strs[i+1] ? strs[i+1] : min
            max = max < strs[i+1] ? strs[i+1] : max
            //找到数组中字符串的最大和最小值
        }
        //  比较最大和最小的公共前缀
        for(var x = 0;x<max.length;x++){
            if(max[x] == min[x]){
                res = res + max[x]
            }else{
                break
            }
        }
        return res
    }
=======
// 最长公共前缀
/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    if(strs.length == []){
        return ""
    }else{
        let res = ""
        let max = strs[0]
        let min = strs[0]
        for(var i = 0;i<strs.length-1;i++){
            min = min > strs[i+1] ? strs[i+1] : min
            max = max < strs[i+1] ? strs[i+1] : max
            //找到数组中字符串的最大和最小值
        }
        //  比较最大和最小的公共前缀
        for(var x = 0;x<max.length;x++){
            if(max[x] == min[x]){
                res = res + max[x]
            }else{
                break
            }
        }
        return res
    }
>>>>>>> 3060b42 (第一次Git提交所有文件)
};