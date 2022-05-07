<<<<<<< HEAD
// 如何去重
const array = [1,2,3,5,1,5,9,1,2,8];  //  有重复项
// 即将加入的，在数组里出现过？


// call 摇人 指定函数this -> 第一个参数
// call 借用 
// console.log(typeof array,Object.prototype.toString.call(array));
// console.log(Array.isArray(array));

/**
 * @func   去除数组中的重复
 * @params  arr 数组
 * @returns 
*/
const uniqueArray = (arr) =>{
    let res = [];
    // 以空间换时间
    let map = {};  // 对象  k:v  find  o(1) 
    //o(n^2)  降低？


    for(let i= 0;i<arr.length;i++){
        let temp = arr[i];
        if(!map.hasOwnProperty(temp)){ //o(1)
            map[temp] = i;
            res.push(temp);
        }
        // o(n)
        // if(res.indexOf(temp == -1)){
        //     res.push(temp);
        // }
    }
    return res;
}

console.log(uniqueArray(array));

let map = {};
console.log(map[2]=1,map)
=======
// 如何去重
const array = [1,2,3,5,1,5,9,1,2,8];  //  有重复项
// 即将加入的，在数组里出现过？


// call 摇人 指定函数this -> 第一个参数
// call 借用 
// console.log(typeof array,Object.prototype.toString.call(array));
// console.log(Array.isArray(array));

/**
 * @func   去除数组中的重复
 * @params  arr 数组
 * @returns 
*/
const uniqueArray = (arr) =>{
    let res = [];
    // 以空间换时间
    let map = {};  // 对象  k:v  find  o(1) 
    //o(n^2)  降低？


    for(let i= 0;i<arr.length;i++){
        let temp = arr[i];
        if(!map.hasOwnProperty(temp)){ //o(1)
            map[temp] = i;
            res.push(temp);
        }
        // o(n)
        // if(res.indexOf(temp == -1)){
        //     res.push(temp);
        // }
    }
    return res;
}

console.log(uniqueArray(array));

let map = {};
console.log(map[2]=1,map)
>>>>>>> 3060b42 (第一次Git提交所有文件)
