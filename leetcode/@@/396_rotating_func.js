// 旋转函数
/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * F[0] = 0 * nums[0] + 1 * nums[1] + 2 * nums[2] + 3 * nums[3]
 *   
 * F[1] = 0 * nums[3] + 1 * nums[0] + 2 * nums[1] + 3 * nums[2]
 *      = F[0] + sum(0, 1, 2) - 3 * nums[3]
 *      = F[0] + sum - 4 * nums[3]
 *   
 * F[2] = 0 * nums[2] + 1 * nums[3] + 2 * nums[0] + 3 * nums[1]
 *      = F[1] + sum(0, 1, 3) - 3 * nums[2]
 *      = F[1] + sum - 4 * nums[2] 
 *   
 * F[3] = 0 * nums[1] + 1 * nums[2] + 2 * nums[3] + 3 * nums[0]
 *      = F[2] + sum(2, 3, 0) - 3 * nums[1]
 *      = F[2] + sum - 4 * nums[1]
 * 
 *         . . . . . .
 * 
 * 故能得出规律:
 * F[n] = F[n-1] * sum - 4 * nums[length - n]    
 *
 */

 var maxRotateFunction = function(nums) {

    let sum = 0, res = Number.NEGATIVE_INFINITY, cur = 0
    const len = nums.length
    for (let i = 0; i < len; i++) {
        sum += nums[i]
        cur += i * nums[i]
    }
    for (let i = 0; i < len; i++) {
        res = Math.max(res, cur)
        cur = cur + sum - len * nums[len - i - 1]
    }
    return res
};