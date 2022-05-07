<<<<<<< HEAD
let array = [1,2,2, 1, "1", "1", true, true, "true", {}, {}, "{}", null, null, undefined, undefined];
/**
 * @func 数组去重 
 * @params  arr 数组
 * @returns array
*/
function myUnique(arr){
    let brr = []
  arr.forEach(item => {
    // 使用 indexOf  返回数组是否包含某个值 没有就返回 -1 有就返回下标
    if(brr.indexOf(item) === -1) brr.push(item);
    // 或使用 includes 返回数组是否包含某个值  没有就返回false  有就返回true
    // if(!brr.includes(item)) brr.push(item);
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
    let brr = []
  arr.forEach(item => {
    // 使用 indexOf  返回数组是否包含某个值 没有就返回 -1 有就返回下标
    if(brr.indexOf(item) === -1) brr.push(item);
    // 或使用 includes 返回数组是否包含某个值  没有就返回false  有就返回true
    // if(!brr.includes(item)) brr.push(item);
  })
  return brr;
}

>>>>>>> 3060b42 (第一次Git提交所有文件)
console.log(myUnique(array));