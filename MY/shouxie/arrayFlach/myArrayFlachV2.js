// 数组扁平化
// 多维数组变成一维


let arr = [1, [2, [3, [4, [5]],[6]],[7]],[8]]


// 方法二
// 转成字符串，再去掉字符串里的 “[” 和 “]”，再把字符串转回数组
//  JSON.parse 会将其转换为 JavaScript 数组，JSON.stringify() 方法用于将 JavaScript 值转换为 JSON 字符串。
// console.log(JSON.stringify(arr).replace(/\[|\]/g, ""))  // 1,2,3,4,5,6,7,8

let brr = JSON.parse( "[" + JSON.stringify(arr).replace(/\[|\]/g, "") + "]")
console.log(brr) // [1, 2, 3, 4, 5, 6, 7, 8]


