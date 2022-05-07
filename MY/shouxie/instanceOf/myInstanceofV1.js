/**
 * @func instanceof 实现
 * @params  now 实例对象  old 原型对象
 * @returns boolean 
*/
function myInstanceof(now,old){
    // let link = now.__proto__;
    let link = Object.getPrototypeOf(now);
    while(link !== null){
        if(link === old.prototype)return true;
        // link = link.__proto__;   
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
console.log(myInstanceof(cat,Cat));
console.log(myInstanceof(cat,Object));
console.log(myInstanceof(cat,D));
// console.log(myInstanceof(null,Object));




