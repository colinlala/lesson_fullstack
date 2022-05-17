/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-17 16:06:01
 * @LastEditTime: 2022-05-17 16:37:10
 * @Description: 
 */
let template = '我是{{name}},年龄{{age}},性别{{sex}}';
let person = {
    name: 'zyh',
    age: 18,
    sex: '男'
}
/**
 * @description: 字符串模板所有{{}} 占位符替换成对象里面的值
 * @param {string} template
 * @param {object} data
 * @return {string}
 */
function render(template, data) {
    // {{}}
    const reg = /\{\{(\w+)\}\}/;
    // console.log(Object.prototype.toString.call(reg));// [object RegExp]
    if (reg.test(template)) {  // 如果还有占位符没有被替换
        const name = reg.exec(template)[1];  // 数组的第一项是'name'、'age'、'sex'
        // console.log(name)
        template = template.replace(reg, person[name]);
        // console.log(template);
        return render(template, data);
    }
    return template;
}

// 完成字符串模板的嵌入值
console.log(render(template, person));