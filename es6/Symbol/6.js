// 数组去重
const spread = [12, 5, 8, 8, 130, 44, 130];
const uniqueArr = spread.filter((item, index, arr) => {
    // console.log(item, index, arr)
    // 如果是重复项就false
    return arr.indexOf(item) == index;
})
console.log(uniqueArr);
// es6 新的数据结构
const arr = [...new Set(spread)]
console.log(arr);

let set = new Set(spread);
const arr2 = [...set];
console.log(Object.prototype.toString.call(set), arr2);

// 不用重复造轮子
