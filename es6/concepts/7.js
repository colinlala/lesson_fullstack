const obj = {
    name:'zyh',
    food:'肉',

}

// const food = obj.food;

// es6有新api解构
const { name , food} = obj;
console.log(name,food);

// const name = '123';//报错  无法重新声明块范围变量“name”。
// let name = '123';//报错  无法重新声明块范围变量“name”。


// 传统写法
// function introduct(name,food){
//     console.log(`${name},好哥哥,最喜欢的食物是${food}`);
// }
// introduct(obj.name,obj.food);



function introduct({name,food}){
    console.log(`${name},好哥哥,最喜欢的食物是${food}`);
}
introduct(obj);
