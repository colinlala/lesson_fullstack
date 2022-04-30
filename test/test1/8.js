/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-30 15:07:19
 * @LastEditTime: 2022-04-30 15:10:11
 * @Description:    string.replace
 * 
 */
function createPhoneNumber(numbers) {
    var format = `(xxx)xxx-xxxx`;
    for (var i = 0; i < numbers.length; i++) {
        format = format.replace('x', numbers[i]);
    }
    return format;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
