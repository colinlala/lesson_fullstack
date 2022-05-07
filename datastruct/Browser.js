<<<<<<< HEAD
// 浏览器的前进后退功能
// 1. 面向对象模块化，思想，一个文件就写一个类
// 2. 引入其他模块

const {StackBasedLinkedList} = require('./StackBaseOnLinkedList');
console.log(StackBasedLinkedList)
class Browser{
    constructor(){
        this.normalStack = new StackBasedLinkedList();
        this.backStack = new StackBasedLinkedList();
    }
    pushNormal(name){
        this.normalStack.push(name);  // 浏览网页入栈
        this.backStack.clear();      // 
        this.displayAllStack();
    }
    back(){
        const value = this.normalStack.pop();
        if(value !== -1){
            // 可以出栈
            this.backStack.push(value);
            this.displayAllStack();
        }else {
            // 到顶了
            console.log('到顶啦！')
        }
    }
    front(){
        const value = this.backStack.pop();
        if(value !== -1){
            this.normalStack.push(value);
            this.displayAllStack();
        }else {
            console.log('---前面到顶啦---');
        }
    }
    displayAllStack(){
        console.log('---后退页面---');
        this.backStack.display();
        console.log('---浏览页面---');
        this.normalStack.display();
    }
    
}

let browser = new Browser();
browser.pushNormal('www.google.com');
browser.pushNormal('www.baidu.com');
browser.pushNormal('www.github.com');
browser.back();
browser.back();
browser.front();
browser.pushNormal('www.tmall.com');


=======
// 浏览器的前进后退功能
// 1. 面向对象模块化，思想，一个文件就写一个类
// 2. 引入其他模块

const {StackBasedLinkedList} = require('./StackBaseOnLinkedList');
console.log(StackBasedLinkedList)
class Browser{
    constructor(){
        this.normalStack = new StackBasedLinkedList();
        this.backStack = new StackBasedLinkedList();
    }
    pushNormal(name){
        this.normalStack.push(name);  // 浏览网页入栈
        this.backStack.clear();      // 
        this.displayAllStack();
    }
    back(){
        const value = this.normalStack.pop();
        if(value !== -1){
            // 可以出栈
            this.backStack.push(value);
            this.displayAllStack();
        }else {
            // 到顶了
            console.log('到顶啦！')
        }
    }
    front(){
        const value = this.backStack.pop();
        if(value !== -1){
            this.normalStack.push(value);
            this.displayAllStack();
        }else {
            console.log('---前面到顶啦---');
        }
    }
    displayAllStack(){
        console.log('---后退页面---');
        this.backStack.display();
        console.log('---浏览页面---');
        this.normalStack.display();
    }
    
}

let browser = new Browser();
browser.pushNormal('www.google.com');
browser.pushNormal('www.baidu.com');
browser.pushNormal('www.github.com');
browser.back();
browser.back();
browser.front();
browser.pushNormal('www.tmall.com');


>>>>>>> 3060b42 (第一次Git提交所有文件)
