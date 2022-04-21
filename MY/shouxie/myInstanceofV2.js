// 解决别的类型也可以判断
/**
 * @func instanceof 实现
 * @params  L instanceof的左边  R instanceof的右边
 * @returns boolean 
*/
function myInstanceof(L = null,R){
    // 对于左侧参数如果是非对象直接返回false
    if(Object(L) !== L)return false;
    // 对于右侧参数可以认为只能为函数且不能没有Prototype属性
    if (typeof R !== 'function' || !R.prototype)throw new TypeError('Right-hand side of 'instanceof' is not an object')
    let link = Object.getPrototypeOf(L);
    while(link !== null){
        if(link === R.prototype)return true;
        link = Object.getPrototypeOf(link);
    }
    return false;
}
function Cat(m,k,l){
    this.m = m;
    this.k = k;
    this.l = l;
}
function D(){

}
const cat = new Cat('m','k','l');
console.log(myInstanceof(cat,Cat));//true
console.log(myInstanceof(cat,Object));//true


console.log(myInstanceof(1, Cat)); // false
console.log(myInstanceof('', Cat)); // false
console.log(myInstanceof(true, Cat)); // false
console.log(myInstanceof(null, Cat)); // false
console.log(myInstanceof(undefined, Cat)); // false
console.log(myInstanceof(0, Cat)); // false


console.log(myInstanceof(cat, 1)); // Uncaught TypeError: Right-hand side of 'instanceof' is not an object
console.log(myInstanceof(cat, '')); // Uncaught TypeError: Right-hand side of 'instanceof' is not an object
console.log(myInstanceof(cat, true)); // Uncaught TypeError: Right-hand side of 'instanceof' is not an object
console.log(myInstanceof(cat, null)); // Uncaught TypeError: Right-hand side of 'instanceof' is not an object
console.log(myInstanceof(cat, undefined)); // Uncaught TypeError: Right-hand side of 'instanceof' is not an object
console.log(myInstanceof(cat, 0)); // Uncaught TypeError: Right-hand side of 'instanceof' is not an object
console.log(myInstanceof(cat, {})); // Uncaught TypeError: Right-hand side of 'instanceof' is not an object


