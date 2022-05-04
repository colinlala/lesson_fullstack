// 对象类型转换
const obj = {
    value: 1,
    valueOf() {
        return 1;
    }
}

// console.log(obj == 1) //false
console.log(obj == 1) //true

