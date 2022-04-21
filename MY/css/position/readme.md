1. static
    - 默认没有定位

2. fixed
    - 固定定位，相对于浏览器窗口进行定位
3. relative
    - 相对于自身定位，不脱离文档流
    - 如果有left，right，top，bottom--> 只剩下left，top
4. absolute
    - 相对于第一个有relative的父元素，脱离文档流
    - 如果有left，right，top，bottom--> left，right，top，bottom