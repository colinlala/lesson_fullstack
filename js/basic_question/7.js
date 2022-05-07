<<<<<<< HEAD
// 类型转换  显示和隐示    3种类型转换

// 转换成布尔值
// 转换成数字  false + 1
// 转换成字符串  + 

console.log(typeof (1 + '1'))   // string  拼接优先，再运算
console.log(typeof (true + true))   // number

console.log(4 + [1, 2, 3])  //41,2,3  拼接，然后[1,2,3].toString()
console.log(typeof (4 + [1, 2, 3]))  //string

console.log([1, 2].toString()) // 1,2


console.log('a' + +'b')  // aNaN
console.log(+'b')  //NaN
console.log(Number.isNaN(+'b'))  // true

if (!+'a') {
    console.log('--------------')
}

console.log(4 * [])  // 0 空值就转0 浏览器下 +[]  -> 0
console.log(4 * [1, 2])  //NaN 有值就转NaN
=======
// 类型转换  显示和隐示    3种类型转换

// 转换成布尔值
// 转换成数字  false + 1
// 转换成字符串  + 

console.log(typeof (1 + '1'))   // string  拼接优先，再运算
console.log(typeof (true + true))   // number

console.log(4 + [1, 2, 3])  //41,2,3  拼接，然后[1,2,3].toString()
console.log(typeof (4 + [1, 2, 3]))  //string

console.log([1, 2].toString()) // 1,2


console.log('a' + +'b')  // aNaN
console.log(+'b')  //NaN
console.log(Number.isNaN(+'b'))  // true

if (!+'a') {
    console.log('--------------')
}

console.log(4 * [])  // 0 空值就转0 浏览器下 +[]  -> 0
console.log(4 * [1, 2])  //NaN 有值就转NaN
>>>>>>> 3060b42 (第一次Git提交所有文件)
