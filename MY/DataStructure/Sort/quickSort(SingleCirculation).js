<<<<<<< HEAD
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-25 15:07:20
 * @LastEditors: ZYH
 * @LastEditTime: 2022-04-25 15:11:22
 * @Description: 快速排序（单边循环法）
 * 
 */
function quSortSingleCirc(arr, startIndex, endIndex) {
    // 递归结束条件：startIndex大于或等于endIndex时
    if (startIndex >= endIndex) {
        return;
    }
    // 得到基准元素位置
    let pivotIndex = partition(arr, startIndex, endIndex);
    // 根据基准元素，分成两部分进行递归排序
    quSortSingleCirc(arr, startIndex, pivotIndex - 1);
    quSortSingleCirc(arr, pivotIndex + 1, endIndex);
}
function partition(arr, startIndex, endIndex) {
    // 取第1个位置（也可以选择随机位置）的元素作为基准元素
    let pivot = arr[startIndex];
    let mark = startIndex;


    for (let i = startIndex + 1; i <= endIndex; i++) {
        if (arr[i] < pivot) {
            mark++;
            let temp = arr[mark];
            arr[mark] = arr[i];
            arr[i] = temp;
        }
    }


    //pivot 和指针重合点交换
    arr[startIndex] = arr[mark];
    arr[mark] = pivot;


    return mark;
}

let array = [4, 4, 6, 5, 3, 2, 8, 1];
console.log(quSortSingleCirc(array, 0, array.length - 1), array)

=======
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-25 15:07:20
 * @LastEditors: ZYH
 * @LastEditTime: 2022-04-25 15:11:22
 * @Description: 快速排序（单边循环法）
 * 
 */
function quSortSingleCirc(arr, startIndex, endIndex) {
    // 递归结束条件：startIndex大于或等于endIndex时
    if (startIndex >= endIndex) {
        return;
    }
    // 得到基准元素位置
    let pivotIndex = partition(arr, startIndex, endIndex);
    // 根据基准元素，分成两部分进行递归排序
    quSortSingleCirc(arr, startIndex, pivotIndex - 1);
    quSortSingleCirc(arr, pivotIndex + 1, endIndex);
}
function partition(arr, startIndex, endIndex) {
    // 取第1个位置（也可以选择随机位置）的元素作为基准元素
    let pivot = arr[startIndex];
    let mark = startIndex;


    for (let i = startIndex + 1; i <= endIndex; i++) {
        if (arr[i] < pivot) {
            mark++;
            let temp = arr[mark];
            arr[mark] = arr[i];
            arr[i] = temp;
        }
    }


    //pivot 和指针重合点交换
    arr[startIndex] = arr[mark];
    arr[mark] = pivot;


    return mark;
}

let array = [4, 4, 6, 5, 3, 2, 8, 1];
console.log(quSortSingleCirc(array, 0, array.length - 1), array)

>>>>>>> 3060b42 (第一次Git提交所有文件)
