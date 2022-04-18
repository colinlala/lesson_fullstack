// 基于array创建一个stack类
class ArrayStack {
    // 数据结构 = 特定的数据存储方式 + 行为的组合
    // 栈的容量
    constructor(n){
        this.items = []; // 数据集合  好用，好理解 ，连续存储  这是缺点
        this.n = n;  // 容量  ，栈的上限
        // 栈顶指针
        this.count = 0;  // 初始栈为空
    }
    // 行为
    
    // 入栈操作
    /**
     * @func  入栈
     * @param {*} item
     * @retuens boolean
     * 
    */
    push(item){
        // 空间容量到达上限
        if( this.count >= this.n ) return false;
        this.items[count] = item ;
        this.count++;
        return true;
    }
    /**
     * @func 出栈
     * @returns null | *
    */
    pop(){
        if(this.count == 0) return null;
        let tmp = this.items[this.count - 1];   //-1是为了得到最后一个元素，因为入栈后count++了
        this.count--;
        return tmp;
    }
    
}