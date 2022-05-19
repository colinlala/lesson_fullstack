/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-19 15:26:22
 * @LastEditTime: 2022-05-19 15:26:54
 * @Description: 
 */
let foo = 'bar';
setTimeout(() => foo = 'baz', 1000);

/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-19 15:59:59
 * @LastEditTime: 2022-05-19 16:32:18
 * @Description: 
 */
const c = 2;

/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-19 15:58:43
 * @LastEditTime: 2022-05-19 16:03:32
 * @Description: 
 */
const a = `2${c}`;

/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-19 15:27:01
 * @LastEditTime: 2022-05-19 15:59:26
 * @Description: 
 */

console.log(a);
setTimeout(() => console.log(foo), 2000);
