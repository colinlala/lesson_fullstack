<<<<<<< HEAD
// false
const a = {
    value: 1,
    valueOf() {
        return this.value++;
    }
}
// a==1 隐式调用 a -> 对象  转换成简单数据类型 valueOf值 toString
if (a == 1 && a == 2 && a == 3) {
    console.log('66666666666666666')
=======
// false
const a = {
    value: 1,
    valueOf() {
        return this.value++;
    }
}
// a==1 隐式调用 a -> 对象  转换成简单数据类型 valueOf值 toString
if (a == 1 && a == 2 && a == 3) {
    console.log('66666666666666666')
>>>>>>> 3060b42 (第一次Git提交所有文件)
}