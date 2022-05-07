<<<<<<< HEAD
// 删除有序数组的重复项

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    var count = 0;
    var n = nums.length;
    for(let i = 0 ;i<n;i++){
        if(nums[i] != nums[i+1]){
            nums[i-count] = nums[i]
        }else{
            count++;
        }
    }
    return n-count;
=======
// 删除有序数组的重复项

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    var count = 0;
    var n = nums.length;
    for(let i = 0 ;i<n;i++){
        if(nums[i] != nums[i+1]){
            nums[i-count] = nums[i]
        }else{
            count++;
        }
    }
    return n-count;
>>>>>>> 3060b42 (第一次Git提交所有文件)
};