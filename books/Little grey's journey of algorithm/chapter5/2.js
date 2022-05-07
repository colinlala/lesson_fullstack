<<<<<<< HEAD
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-01 20:24:02
 * @LastEditTime: 2022-05-01 20:56:08
 * @Description:删去k个数字后的最小值
 *
 */
/**
 * @description:
 * @param {string} num
 * @param {number} k
 * @return {*}
 */
function reduceNumber(number, key) {
    let result = [];
    if (key >= number.toString().length) {
        return '0';
    }
    // 把数字分开成数组
    let temp = number.toString().split('');
    for (var i = 0; i < key; i++) {
        let equer = -1; // 默认为-1，也可以是空值或者null
        for (var j = 0; j < temp.length; j++) {
            if (temp[j] >= temp[j + 1]) {
                equer = j;
                break; // 每次循环key的时候，找到最后一个左边>=右边的数就跳出循环，这个跟重要
            }
        }
        if (equer >= 0) {
            // 如果符合就切掉
            temp.splice(equer, 1);
        }
    }
    result = temp;
    return result.join('');
}

console.log(reduceNumber(1456912, 1))
console.log(reduceNumber(1456912, 2))
console.log(reduceNumber(1456912, 3))
console.log(reduceNumber(11, 2))
console.log(reduceNumber(5456912, 1))
console.log(reduceNumber(5456912, 2))

console.log(reduceNumber(8917282, 2))



=======
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-01 20:24:02
 * @LastEditTime: 2022-05-01 20:56:08
 * @Description:删去k个数字后的最小值
 *
 */
/**
 * @description:
 * @param {string} num
 * @param {number} k
 * @return {*}
 */
function reduceNumber(number, key) {
    let result = [];
    if (key >= number.toString().length) {
        return '0';
    }
    // 把数字分开成数组
    let temp = number.toString().split('');
    for (var i = 0; i < key; i++) {
        let equer = -1; // 默认为-1，也可以是空值或者null
        for (var j = 0; j < temp.length; j++) {
            if (temp[j] >= temp[j + 1]) {
                equer = j;
                break; // 每次循环key的时候，找到最后一个左边>=右边的数就跳出循环，这个跟重要
            }
        }
        if (equer >= 0) {
            // 如果符合就切掉
            temp.splice(equer, 1);
        }
    }
    result = temp;
    return result.join('');
}

console.log(reduceNumber(1456912, 1))
console.log(reduceNumber(1456912, 2))
console.log(reduceNumber(1456912, 3))
console.log(reduceNumber(11, 2))
console.log(reduceNumber(5456912, 1))
console.log(reduceNumber(5456912, 2))

console.log(reduceNumber(8917282, 2))



>>>>>>> 3060b42 (第一次Git提交所有文件)
