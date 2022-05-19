/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-19 15:27:01
 * @LastEditTime: 2022-05-19 15:59:26
 * @Description: 
 */
import { foo } from './m1.js';
import { a } from './m3.js';

console.log(a);
setTimeout(() => console.log(foo), 2000);