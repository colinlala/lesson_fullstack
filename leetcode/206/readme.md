<!--
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-17 15:21:22
 * @LastEditTime: 2022-05-17 15:24:20
 * @Description: 
-->
反转链表（简单）如何回答
- 在链表的遍历过程中，用pre保存当前节点的前驱节点，将前驱节点变为下次当前节点的后继节点，同时原有节点的next属性被next变量保存，不影响原遍历的情况下，完成反转。