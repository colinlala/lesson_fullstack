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
// person1.friend.sayHi();