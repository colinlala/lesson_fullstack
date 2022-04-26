/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-26 22:04:38
 * @LastEditTime: 2022-04-26 22:32:22
 * @Description:
 *
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const n1 = new ListNode(1);
const n2 = new ListNode(2);
n1.next = n2;
const n3 = new ListNode(3);
n2.next = n3;

// 在n1后插入
// 不用碰n2
// n3.next = n1.next;
// n1.next = n3;

// 移除n2
const target = n1.next;
n1.next = target.next;