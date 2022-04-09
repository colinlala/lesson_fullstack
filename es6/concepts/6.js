let var1 = {name:'zyh'};
let var2 = var1;   // 引用式赋值,不是给值，给的地址
var2.name = 'www';
console.log(var2);  //{ name: 'www' }
console.log(var1);   // { name: 'www' }