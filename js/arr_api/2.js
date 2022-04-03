// forEach 是数组的Api
function forEach(arr,callback){
    // 完成对数组的遍历，并每个元素执行操作
    for(let i = 0; i<arr.length;i++){
        // 块级作用域
        const item = arr[i];
        callback(item,i,arr);
    }
}
// [1,2,3,4,5].forEach()
const items = [1,2,3,4,5]
forEach(items, function(item, index, arr){
    // 函数作用域
    console.log(item, index, arr);
    //console.log(item+5);
})
// console.log(items);





// map操作数组得到新数组，不改变原数组
const newItem = items.map(function(item, index, arr){
    // console.log(item);
    //map比forEach跟高级
    return item+5;
})

console.log(newItem,items);