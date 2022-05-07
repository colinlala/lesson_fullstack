<<<<<<< HEAD
let var1 = {name:'zyh'};
let var2 = var1;   // 引用式赋值,不是给值，给的地址
var2.name = 'www';
console.log(var2);  //{ name: 'www' }
=======
let var1 = {name:'zyh'};
let var2 = var1;   // 引用式赋值,不是给值，给的地址
var2.name = 'www';
console.log(var2);  //{ name: 'www' }
>>>>>>> 3060b42 (第一次Git提交所有文件)
console.log(var1);   // { name: 'www' }