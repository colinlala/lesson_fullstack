<<<<<<< HEAD
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-25 16:03:16
 * @LastEditors: ZYH
 * @LastEditTime: 2022-04-25 16:03:16
 * @Description: 去掉最低工资和最高工资后的工资平均值
 * 
 */
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
    let sum = Math.min(...salary) + Math.max(...salary);
    let len = salary.length;

    let sumOther = salary.reduce((pre, cur) => {
        return pre + cur;
    });
    return (sumOther - sum) / (len - 2);
=======
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-25 16:03:16
 * @LastEditors: ZYH
 * @LastEditTime: 2022-04-25 16:03:16
 * @Description: 去掉最低工资和最高工资后的工资平均值
 * 
 */
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
    let sum = Math.min(...salary) + Math.max(...salary);
    let len = salary.length;

    let sumOther = salary.reduce((pre, cur) => {
        return pre + cur;
    });
    return (sumOther - sum) / (len - 2);
>>>>>>> 3060b42 (第一次Git提交所有文件)
};