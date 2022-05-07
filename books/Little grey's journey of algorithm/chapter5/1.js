<<<<<<< HEAD
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-01 19:39:36
 * @LastEditTime: 2022-05-01 20:23:57
 * @Description:寻找全排列的下一个数
 *
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    // 找到逆序区域中的前一位
    let index = 0; // 0的话表示已经逆序
    // 逆着来判断是否类似12354的情况
    for (let i = nums.length - 1; i < nums.length; i--) {
        if (i <= 0 || nums[i] > nums[i - 1]) {
            index = i;
            break;
        }
    }
    // 如果是0，返回极端数字
    if (!index) {
        nums.reverse();
        return;
    }
    // 将逆序区域中的前一位和逆序区域中的最小数进行交换
    for (let i = nums.length - 1; i < nums.length; i--) {
        if (i <= 0) {
            break;
        }
        if (nums[i] > nums[index - 1]) {
            const temp = nums[index - 1];
            nums[index - 1] = nums[i];
            nums[i] = temp;
            // 执行一次就跳出
            break;
        }
    }
    // 逆序区域中顺序排列
    let i = index, j = nums.length - 1;
    while (j > i) {
        const temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp;
        i++;
        j--;
    }
    console.log(nums.join(''));
};

nextPermutation([1, 2, 3, 5, 4]);

=======
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-01 19:39:36
 * @LastEditTime: 2022-05-01 20:23:57
 * @Description:寻找全排列的下一个数
 *
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    // 找到逆序区域中的前一位
    let index = 0; // 0的话表示已经逆序
    // 逆着来判断是否类似12354的情况
    for (let i = nums.length - 1; i < nums.length; i--) {
        if (i <= 0 || nums[i] > nums[i - 1]) {
            index = i;
            break;
        }
    }
    // 如果是0，返回极端数字
    if (!index) {
        nums.reverse();
        return;
    }
    // 将逆序区域中的前一位和逆序区域中的最小数进行交换
    for (let i = nums.length - 1; i < nums.length; i--) {
        if (i <= 0) {
            break;
        }
        if (nums[i] > nums[index - 1]) {
            const temp = nums[index - 1];
            nums[index - 1] = nums[i];
            nums[i] = temp;
            // 执行一次就跳出
            break;
        }
    }
    // 逆序区域中顺序排列
    let i = index, j = nums.length - 1;
    while (j > i) {
        const temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp;
        i++;
        j--;
    }
    console.log(nums.join(''));
};

nextPermutation([1, 2, 3, 5, 4]);

>>>>>>> 3060b42 (第一次Git提交所有文件)
