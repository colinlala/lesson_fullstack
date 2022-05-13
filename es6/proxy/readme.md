- 如何监听对象的读写？
    - 是有必要的，数据驱动的底层
    - Proxy  |  Object.defineProperty
    - 报错  
        1. console.warn、
        2. throw new Error、
        3. try{} catch(e){}

- 浏览器是我们的代理对象