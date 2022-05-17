/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-17 14:45:27
 * @LastEditTime: 2022-05-17 15:40:05
 * @Description: 206 反转链表
 */
// 链表由节点组成
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
// a1是a2的前驱节点 ， a2是a1的后继节点
const a1 = new ListNode(1);
const a2 = new ListNode(2);
const a3 = new ListNode(3);
const a4 = new ListNode(4);
const a5 = new ListNode(5);

a1.next = a2;
a2.next = a3;
a3.next = a4;
a4.next = a5;

function reverseList(head) {
    // 如果是一个空链表，或者只有一个头结点
    if (!head || !head.next) return head;

    // 头变尾  前驱节点变后继节点 
    // 链表 线性结构 
    let cur = head;  // 当前节点 
    let pre = null;  // 前驱节点 

    while (cur) { // 尾部null  es6  const let 块级作用域 
        const next = cur.next; // 当前节点的下一个节点  后继节点 
        cur.next = pre
        pre = cur; // 前驱节点 为成为下一轮的后继节点 存好值
        cur = next; // 遍历 
    }

    return pre;
}

console.log(reverseList(a1))


