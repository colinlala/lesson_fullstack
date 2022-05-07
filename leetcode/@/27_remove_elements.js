<<<<<<< HEAD
// 移除元素
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    let index = 0, last = nums.length - 1
    while (index <= last) {
        if (nums[index] === val) {
            nums[index] = nums[last]
            last--
        } else {
            index++
        }
  }
  return index

};
// let n = [1,2,2,3,4]
// console.log(removeElement(n,2),n)


//  var removeElement = function(nums, val) {
//     let left = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] == val){
//             nums.splice(i,1);
//             i--;
//         }
//         else{
//             left++;
//         }
//     }
//     return left;
=======
// 移除元素
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    let index = 0, last = nums.length - 1
    while (index <= last) {
        if (nums[index] === val) {
            nums[index] = nums[last]
            last--
        } else {
            index++
        }
  }
  return index

};
// let n = [1,2,2,3,4]
// console.log(removeElement(n,2),n)


//  var removeElement = function(nums, val) {
//     let left = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] == val){
//             nums.splice(i,1);
//             i--;
//         }
//         else{
//             left++;
//         }
//     }
//     return left;
>>>>>>> 3060b42 (第一次Git提交所有文件)
// };