<<<<<<< HEAD
// 最小栈

// 放入一个数 直到这个数北区出前，最小值不变。
// 二维数组q = [[放入的数，放入的数时最小值]...],所有操作转为对q的操作。
var MinStack = function() {
    this.q = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.q.unshift([val,Math.min(this.q[0] ? this.q[0][1] : Infinity,val)]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.q.shift();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.q[0][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.q[0][1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
=======
// 最小栈

// 放入一个数 直到这个数北区出前，最小值不变。
// 二维数组q = [[放入的数，放入的数时最小值]...],所有操作转为对q的操作。
var MinStack = function() {
    this.q = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.q.unshift([val,Math.min(this.q[0] ? this.q[0][1] : Infinity,val)]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.q.shift();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.q[0][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.q[0][1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
>>>>>>> 3060b42 (第一次Git提交所有文件)
 */