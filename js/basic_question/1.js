/**
 * @description: 
 * @param {object} person
 * @return {*}
 */
//  传值，简单数据类型   不会影响外面的
// 引用数据类型，传递对对象的引用，会影响
function test(person) {

    let obj = {
        ...person
    }

    obj.age = 26

    // person.age = 26;  // 可读性不好
    // // 把person 改成了新对象的地址
    // person = {
    //     name: 'yyy',
    //     age: 30
    // }
    // return person
}
// 对象  堆内存中  地址
const p1 = {
    name: 'zyh',
    age: 22
}
console.log(p1)    // { name: 'zyh', age: 22 }
const p2 = test(p1)

// console.log(p1)   // { name: 'zyh', age: 26 }
console.log(p1)     //  { name: 'zyh', age: 22 }
console.log(p2)   // { name: 'yyy', age: 30 }
