let array = [1,2,2, 1, "1", "1", true, true, "true", {}, {}, "{}", null, null, undefined, undefined];
/**
 * @func 数组去重 
 * @params  arr 数组
 * @returns array
*/
function myUnique(arr){
    let map = new Map(); // 用空对象 let obj =｛｝利用对象属性不能重复的特性
    let brr = [];
    // Map.has()方法用于检查Map中是否存在具有指定键的元素。
    // 它返回一个布尔值，该值指示映射中是否存在具有指定键的元素。
    arr.forEach( item => {
        if(!map.has(item)){ // 如果是对象的话就判断 !obj[item]
            map.set(item, true); // 如果是对象的话就 obj[item] = true  其他一样
            brr.push(item);
        }
    })
    return brr;
}

console.log(myUnique(array));