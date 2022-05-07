# Set 和 Map 数据结构

## Set

- `Set`本身是一个构造函数，用来生成`Set`数据结构。类似于数组，但是成员的值都是**唯一的**，没有重复的值。

    ```js
    const s = new Set();
    [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
    for (let i of s) {
        console.log(i);
    }
    // 2 3 5 4
    ```




