// 数组扁平化
// 多维数组变成一维


let arr = [1, [2, [3, [4, [5]],[6]],[7]],[8]]



// 方法三
let brr = arr => {
  // 用递归，用 for 循环加递归也可以，这里用 reduce
  // reduce 累计器，本质上也是循环，
  // cur 是循环的当前一个值，相当于 for循环里的arr[i]， pre 是前一个值，相当于for循环里的arr[i-1]
  let crr = arr.reduce((pre, cur) => {
    //   concat() 方法用于连接两个或多个字符串。
    return pre.concat(Array.isArray(cur) ? brr(cur) : cur);
  }, [])
  return crr
}
console.log(brr(arr)) // [1, 2, 3, 4, 5, 6, 7, 8]



