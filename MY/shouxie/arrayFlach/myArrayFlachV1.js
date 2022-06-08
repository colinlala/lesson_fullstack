// 数组扁平化
// 多维数组变成一维


let arr = [1, [2, [3, [4, [5]],[6]],[7]],[8]]

// 方法一
// flat() 默认拉平一层嵌套数组，传入数字几就拉平几层
// Infinity 是无穷大，不管嵌套多少层都给你拉平
// let brr = arr.flat()    // [ 1, 2, [ 3, [ 4, [Array] ], [ 6 ] ], [ 7 ], 8 ]

let brr = arr.flat(Infinity)
console.log(brr) // [1, 2, 3, 4, 5, 6, 7, 8]

// let brr = arr.flat(3)
// console.log(brr) // [1, 2, 3, 4, [5], 6, 7, 8]
