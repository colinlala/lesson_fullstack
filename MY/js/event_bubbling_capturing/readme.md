<<<<<<< HEAD
## 事件冒泡(event bubbling)的事件流

- 事件会从最内层的元素开始发生，一直向上传播，直到document对象。  
    p -> div -> body -> html -> document

## 事件捕获(event capturing)的事件流

- 与事件冒泡相反，事件会从最外层开始发生，直到最具体的元素。  
    document -> html -> body -> div -> p

## addEventListener 的第三个参数

-  element.addEventListener(event, function, useCapture)

1. event : 指定事件名。不要使用 "on" 前缀。 例如，使用 "click" ,而不是使用 "onclick"。
2. function: 指定要事件触发时执行的函数。
3. useCapture: 
    > true - 事件句柄在捕获阶段执行（即在事件捕获阶段调用处理函数）
    > false- 默认。事件句柄在冒泡阶段执行（即表示在事件冒泡的阶段调用事件处理函数）




## 阻止事件冒泡

- 给子级加 event.stopPropagation( )
- 在事件处理函数中返回 false
=======
## 事件冒泡(event bubbling)的事件流

- 事件会从最内层的元素开始发生，一直向上传播，直到document对象。  
    p -> div -> body -> html -> document

## 事件捕获(event capturing)的事件流

- 与事件冒泡相反，事件会从最外层开始发生，直到最具体的元素。  
    document -> html -> body -> div -> p

## addEventListener 的第三个参数

-  element.addEventListener(event, function, useCapture)

1. event : 指定事件名。不要使用 "on" 前缀。 例如，使用 "click" ,而不是使用 "onclick"。
2. function: 指定要事件触发时执行的函数。
3. useCapture: 
    > true - 事件句柄在捕获阶段执行（即在事件捕获阶段调用处理函数）
    > false- 默认。事件句柄在冒泡阶段执行（即表示在事件冒泡的阶段调用事件处理函数）




## 阻止事件冒泡

- 给子级加 event.stopPropagation( )
- 在事件处理函数中返回 false
>>>>>>> 3060b42 (第一次Git提交所有文件)
- event.target==event.currentTarget，让触发事件的元素等于绑定事件的元素，也可以阻止事件冒泡；