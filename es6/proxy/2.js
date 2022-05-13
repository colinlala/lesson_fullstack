const obj = {  // 被代理的对象
    name: '_island',
    score: 59
}
// const objProxy = new Proxy(obj, {})
// console.log(objProxy)  // { name: '_island', score: 59 }

const objProxy = new Proxy(obj, {
    // hander 处理捕捉器
    get: function (target, key) {
        console.log(`捕获到对象获取${key}属性的值操作`); // 捕获到对象获取name属性的值操作
        return target[key];
    },
    // 写操作
    // 对象的访问拦截，捕捉器set
    set: function (target, key, val) {
        // target[key] = val;
        if (key == 'age') {
            if (typeof val == 'number') {
                target[key] = val;
            } else {
                // console.warn('该属性的值必须是Nmber类型');  // 黄色警告
                // throw new TypeError('该属性的值必须是Nmber类型');
                throw new TypeError('该属性的值必须是Nmber类型');
            }
        } else {
            target[key] = val;
        }
    }
})

// console.log(objProxy.name)  // undefined(不写返回值)
// console.log(objProxy.name)   // -------(return '-------')
console.log(objProxy.name)   // _island(return target[key])

// 报错不中断运行
try {
    objProxy.age = '天山童姥';
} catch (error) {
    console.log(error);
}

// objProxy.age = '天山童姥';  // 犯了错 ，应该报错
console.log(objProxy.age)

