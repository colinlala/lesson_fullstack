<<<<<<< HEAD
let array = [1,2,2, 1, "1", "1", true, true, "true", {}, {}, "{}", null, null, undefined, undefined];
/**
 * @func 数组去重 
 * @params  arr 数组
 * @returns array
*/
function myUnique(arr){
    // 使用 filter 返回符合条件的集合
    let brr = arr.filter((item, index) => {
        return arr.indexOf(item) === index;
    })
    return brr;
}

=======
let array = [1,2,2, 1, "1", "1", true, true, "true", {}, {}, "{}", null, null, undefined, undefined];
/**
 * @func 数组去重 
 * @params  arr 数组
 * @returns array
*/
function myUnique(arr){
    // 使用 filter 返回符合条件的集合
    let brr = arr.filter((item, index) => {
        return arr.indexOf(item) === index;
    })
    return brr;
}

>>>>>>> 3060b42 (第一次Git提交所有文件)
console.log(myUnique(array));