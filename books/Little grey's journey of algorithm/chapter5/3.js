<<<<<<< HEAD
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-01 20:36:58
 * @LastEditTime: 2022-05-01 20:55:38
 * @Description: 实现大整数相加
 * 
 */
/**
 * @description: 
 * @param {string} num1
 * @param {string} num2
 * @return {*}
 */
function largeNumAdd(num1, num2) {
    let maxLength = Math.max(num1.length, num2.length);
    //num1和num2位数对齐，位数较小的前面补0
    // padStart()用于头部补全
    num1 = num1.padStart(maxLength, '0');
    num2 = num2.padStart(maxLength, '0');
    let res = '';//存放最后得到的结果
    let figure = 0;//figure = 两个数字对应位数数值相加 + 进位
    let currentNum = 0;//对应位数的结果
    let carry = 0;//进位
    for (let i = num1.length - 1; i >= 0; i--) {
        figure = parseInt(num1[i]) + parseInt(num2[i]) + carry;
        currentNum = figure % 10;
        carry = Math.floor(figure / 10);
        res = currentNum + res;
    }
    console.log(res);
}

=======
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-01 20:36:58
 * @LastEditTime: 2022-05-01 20:55:38
 * @Description: 实现大整数相加
 * 
 */
/**
 * @description: 
 * @param {string} num1
 * @param {string} num2
 * @return {*}
 */
function largeNumAdd(num1, num2) {
    let maxLength = Math.max(num1.length, num2.length);
    //num1和num2位数对齐，位数较小的前面补0
    // padStart()用于头部补全
    num1 = num1.padStart(maxLength, '0');
    num2 = num2.padStart(maxLength, '0');
    let res = '';//存放最后得到的结果
    let figure = 0;//figure = 两个数字对应位数数值相加 + 进位
    let currentNum = 0;//对应位数的结果
    let carry = 0;//进位
    for (let i = num1.length - 1; i >= 0; i--) {
        figure = parseInt(num1[i]) + parseInt(num2[i]) + carry;
        currentNum = figure % 10;
        carry = Math.floor(figure / 10);
        res = currentNum + res;
    }
    console.log(res);
}

>>>>>>> 3060b42 (第一次Git提交所有文件)
largeNumAdd("12883927392839810", "23793183088791481382380");