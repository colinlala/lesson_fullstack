/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-27 17:43:16
 * @LastEditTime: 2022-04-27 18:06:05
 * @Description: ???
 * 
 */
function bucketSort(arr, bucketSize) {
    let maxValue = Math.max(...arr);
    let minValue = Math.min(...arr);
    let d = maxValue - minValue;

    let len = arr.length;
    // 桶的初始化
    const DEFAULT_BUCKET_SIZE = 5;
    bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
    const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    const buckets = new Array(bucketCount);
    for (i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }

    //利用映射函数将数据分配到各个桶中
    for (i = 0; i < len; i++) {
        buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
    }

    arr.length = 0;
    for (i = 0; i < buckets.length; i++) {
        quickSort(buckets[i]); //对每个桶进行排序，这里使用了快速排序
        for (var j = 0; j < buckets[i].length; j++) {
            arr.push(buckets[i][j]);
        }
    }
    return arr;

}
const array = [4, 6, 8, 5, 9, 1, 2, 5, 3, 2];
console.log(bucketSort(array));
