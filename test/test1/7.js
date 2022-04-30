/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-30 14:39:53
 * @LastEditTime: 2022-04-30 15:09:05
 * @Description:    string.substr
 *
 */
// 编写一个函数，接受一个有十个整数组成的数组（0-9）,[1,2,3,4,5,6,7,8,9,0]
// 返回的格式是（123）456-7890的电话号码  字符串
function createPhoneNumber(numbers) {
    // 麻烦
    // return `(${numbers[0]}${numbers[1]}${numbers[2]})${numbers[3]}${numbers[4]}${numbers[6]}-${numbers[7]}${numbers[8]}${numbers[9]}`

    // 转换成string
    numbers = numbers.join(''); // 1234567890
    return `(${numbers.substr(0, 3)})${numbers.substr(3, 3)}-${numbers.substr(6)}`

}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
console.log([].length == 0)