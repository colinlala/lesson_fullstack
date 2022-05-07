<<<<<<< HEAD
function sayHi(){
    console.log('Hello',this.name);
}
var person2 = {
    name:'zyh',
    sayHi:sayHi
}
var person1 = {
    name:'远野',
    friend:person2
}
// 当函数做为对象的方法时，this指向对象，当前对象是person2
var obj = person1.friend;
obj.sayHi();
=======
function sayHi(){
    console.log('Hello',this.name);
}
var person2 = {
    name:'zyh',
    sayHi:sayHi
}
var person1 = {
    name:'远野',
    friend:person2
}
// 当函数做为对象的方法时，this指向对象，当前对象是person2
var obj = person1.friend;
obj.sayHi();
>>>>>>> 3060b42 (第一次Git提交所有文件)
// person1.friend.sayHi();