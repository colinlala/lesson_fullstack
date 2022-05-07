<<<<<<< HEAD
// 1. 数组转化为链表
// 2. push
// 3. remove
// 4. replace
// 5. indexof
// 6. getNode
// 7. addNOde



class ListNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkList{
    constructor(arr){
        if( arr === undefined ){ // 如果数组为空，链表为空
            // 头节点指针
            this.head = null;
            // 链表长度
            this.size = 0;
        }else if( Array.isArray(arr)){ 
            this.head = null;
            this.size = arr.length;
            // 初始化链表
            this.generateList(arr);
        }
    }
    generateList(arr){
        let node = new ListNode(arr[0]);
        this.head = node;
        for(let i=1;i<arr.length;i++ ){
            node.next = new ListNode(arr[i])
            node = node.next;
        }
    }
    push(val){
        // 1.找到最后一个节点
        // 2.创建一个新节点
        // 3.让最后一个节点指向新节点
        // 4.长度+1


        let lastNode = this.getNode(this.size-1)
        let node = new ListNode(val);
        lastNode.next = node;
        this.size++;
    }
    // 查
    getNode(index){
        // 1.找到头节点
        // 2.以此类推，找到inde个节点

        if(index<0 || index>=this.size){
            return '查找位置不在范围或<0';
        }
        let cur = this.head;
        for(let i=0;i<index;i++ ){
            cur = cur.next;
        }
        return cur;
    }
    remove(index){
        // 1.找到要删除元素前的一个节点
        // 2.把要删除元素的指针给前一个节点
        // 3.长度--

        if(index<0 || index>=this.size){
            console.log('删除位置不在范围或<0')
            return null;
        }
        if(index === 0){
            this.head = this.getNode(1);
        }else{
            let pre = this.getNode(index-1);
            pre.next = this.getNode(index).next;
        }
        
        this.size--;
    }
    addNode(index,val){
        // 1.创建一个新节点
        // 2.找到第index的前面一个节点
        // 3.将前面一个节点的指针指向新节点
        // 4.将新节点的指针指向第index个节点
        // 5.长度++


        if(index<0 || index>this.size){
            console.log('插入位置不在范围或<0')
            return null;
        }
        if(index === 0){
            let node = new ListNode(val);
            let newHead = this.head;
            this.head = node;
            node.next = newHead;
        }else{
            // let node = new ListNode(val);
            // let pre = this.getNode(index-1);
            // pre.next = node;
            // node.next = this.getNode(index);
            // this.size++;
            let node = new ListNode(val);
            let pre = this.getNode(index-1);
            node.next = pre.next;
            pre.next = node;
        }
        this.size++;
    }
    replace(index,val){
        // 1. 找到index节点
        // 2. 将他的值替换成val
        if(index<0 || index>=this.size){
            console.log('查找位置不在范围或<0')
            return null;
        }
        let cur = this.getNode(index);
        cur.val = val;
    }
    indexOf(val){
        // 1.遍历查找链表，用val比较每一项的值，相等则return对应的下标
        let cur = this.head;
        for(let i=0;i<this.size;i++ ){
            if(cur.val === val){
                return i;
            }
            cur = cur.next;
        }
    }
}

let arr = [1,2,3,4]

let l1 = new LinkList(arr);
// console.log(l1);

// l1.push(6)
// l1.remove(0)
// l1.addNode(0,0)

// let node = l1.getNode(3);
// console.log(node);

// l1.replace(0,0);
// 展开显示，10层

console.log(l1.indexOf(4));
// console.dir(l1,{
//     depth:10
=======
// 1. 数组转化为链表
// 2. push
// 3. remove
// 4. replace
// 5. indexof
// 6. getNode
// 7. addNOde



class ListNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkList{
    constructor(arr){
        if( arr === undefined ){ // 如果数组为空，链表为空
            // 头节点指针
            this.head = null;
            // 链表长度
            this.size = 0;
        }else if( Array.isArray(arr)){ 
            this.head = null;
            this.size = arr.length;
            // 初始化链表
            this.generateList(arr);
        }
    }
    generateList(arr){
        let node = new ListNode(arr[0]);
        this.head = node;
        for(let i=1;i<arr.length;i++ ){
            node.next = new ListNode(arr[i])
            node = node.next;
        }
    }
    push(val){
        // 1.找到最后一个节点
        // 2.创建一个新节点
        // 3.让最后一个节点指向新节点
        // 4.长度+1


        let lastNode = this.getNode(this.size-1)
        let node = new ListNode(val);
        lastNode.next = node;
        this.size++;
    }
    // 查
    getNode(index){
        // 1.找到头节点
        // 2.以此类推，找到inde个节点

        if(index<0 || index>=this.size){
            return '查找位置不在范围或<0';
        }
        let cur = this.head;
        for(let i=0;i<index;i++ ){
            cur = cur.next;
        }
        return cur;
    }
    remove(index){
        // 1.找到要删除元素前的一个节点
        // 2.把要删除元素的指针给前一个节点
        // 3.长度--

        if(index<0 || index>=this.size){
            console.log('删除位置不在范围或<0')
            return null;
        }
        if(index === 0){
            this.head = this.getNode(1);
        }else{
            let pre = this.getNode(index-1);
            pre.next = this.getNode(index).next;
        }
        
        this.size--;
    }
    addNode(index,val){
        // 1.创建一个新节点
        // 2.找到第index的前面一个节点
        // 3.将前面一个节点的指针指向新节点
        // 4.将新节点的指针指向第index个节点
        // 5.长度++


        if(index<0 || index>this.size){
            console.log('插入位置不在范围或<0')
            return null;
        }
        if(index === 0){
            let node = new ListNode(val);
            let newHead = this.head;
            this.head = node;
            node.next = newHead;
        }else{
            // let node = new ListNode(val);
            // let pre = this.getNode(index-1);
            // pre.next = node;
            // node.next = this.getNode(index);
            // this.size++;
            let node = new ListNode(val);
            let pre = this.getNode(index-1);
            node.next = pre.next;
            pre.next = node;
        }
        this.size++;
    }
    replace(index,val){
        // 1. 找到index节点
        // 2. 将他的值替换成val
        if(index<0 || index>=this.size){
            console.log('查找位置不在范围或<0')
            return null;
        }
        let cur = this.getNode(index);
        cur.val = val;
    }
    indexOf(val){
        // 1.遍历查找链表，用val比较每一项的值，相等则return对应的下标
        let cur = this.head;
        for(let i=0;i<this.size;i++ ){
            if(cur.val === val){
                return i;
            }
            cur = cur.next;
        }
    }
}

let arr = [1,2,3,4]

let l1 = new LinkList(arr);
// console.log(l1);

// l1.push(6)
// l1.remove(0)
// l1.addNode(0,0)

// let node = l1.getNode(3);
// console.log(node);

// l1.replace(0,0);
// 展开显示，10层

console.log(l1.indexOf(4));
// console.dir(l1,{
//     depth:10
>>>>>>> 3060b42 (第一次Git提交所有文件)
// })