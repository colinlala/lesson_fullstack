<<<<<<< HEAD
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-25 21:09:32
 * @LastEditTime: 2022-04-25 21:29:47
 * @Description:
 *
 */
// 栈    队列    数组                         有什么关系？
//  1.  FILO  FIFO    （push,pop,shift,unshift）
//  2.  栈（栈底push添加 pop删除）和队列（队头进行shift删除，队尾push添加）
//      栈和队列都可以基于数组实现，操作受限的特别数组

// array 添加元素的方法
const arr = [1, 2];
arr.push(3);        //尾部
arr.unshift(0);     //头部
// arr.concat([3, 4]);     //组合

// 插队  在第几个元素前插入一项
// arr.splice(index, nums); //切割,还可以用来添加元素（第三个元素）
arr.splice(0, 0, 100); //nums=0，不切割，插入个元素
console.log(arr);


=======
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-25 21:09:32
 * @LastEditTime: 2022-04-25 21:29:47
 * @Description:
 *
 */
// 栈    队列    数组                         有什么关系？
//  1.  FILO  FIFO    （push,pop,shift,unshift）
//  2.  栈（栈底push添加 pop删除）和队列（队头进行shift删除，队尾push添加）
//      栈和队列都可以基于数组实现，操作受限的特别数组

// array 添加元素的方法
const arr = [1, 2];
arr.push(3);        //尾部
arr.unshift(0);     //头部
// arr.concat([3, 4]);     //组合

// 插队  在第几个元素前插入一项
// arr.splice(index, nums); //切割,还可以用来添加元素（第三个元素）
arr.splice(0, 0, 100); //nums=0，不切割，插入个元素
console.log(arr);


>>>>>>> 3060b42 (第一次Git提交所有文件)
