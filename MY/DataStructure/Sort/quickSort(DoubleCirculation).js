/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-25 14:46:23
 * @LastEditors: ZYH
 * @LastEditTime: 2022-04-25 14:56:41
 * @Description: 快速排序（双边循环法）
 * 
 */
function quSortDoubCirc(arr, startIndex, endIndex) {
    // 递归结束条件：startIndex大于或等于endIndex时
    if (startIndex >= endIndex) {
        return;
    }
    // 得到基准元素位置
    let pivotIndex = partition(arr, startIndex, endIndex);
    // 根据基准元素，分成两部分进行递归排序
    quSortDoubCirc(arr, startIndex, pivotIndex - 1);
    quSortDoubCirc(arr, pivotIndex + 1, endIndex);
}
function partition(arr, startIndex, endIndex) {
    // 取第1个位置（也可以选择随机位置）的元素作为基准元素
    let pivot = arr[startIndex];
    let left = startIndex;
    let right = endIndex;

    while (left != right) {
        //控制right 指针比较并左移
        while (left < right && arr[right] > pivot) {
            right--;
        }
        //控制left 指针比较并右移
        while (left < right && arr[left] <= pivot) {
            left++;
        }
        //交换left和right 指针所指向的元素
        if (left < right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
        }
    }
    //pivot 和指针重合点交换
    arr[startIndex] = arr[left];
    arr[left] = pivot;


    return left;
}

let array = [4, 4, 6, 5, 3, 2, 8, 1];
console.log(quSortDoubCirc(array, 0, array.length - 1), array)
