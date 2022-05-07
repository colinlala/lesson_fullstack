<<<<<<< HEAD
// 队列实现栈
var MyStack = function() {
    this.arr1 = [];
    this.arr2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.arr2.push(x);
        while(this.arr1.length) {
            this.arr2.push(this.arr1.shift());
        }
        [this.arr1, this.arr2] = [this.arr2, this.arr1];
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.arr1.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.arr1[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return !this.arr1.length;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
=======
// 队列实现栈
var MyStack = function() {
    this.arr1 = [];
    this.arr2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.arr2.push(x);
        while(this.arr1.length) {
            this.arr2.push(this.arr1.shift());
        }
        [this.arr1, this.arr2] = [this.arr2, this.arr1];
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.arr1.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.arr1[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return !this.arr1.length;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
>>>>>>> 3060b42 (第一次Git提交所有文件)
 */