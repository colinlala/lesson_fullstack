var str = 'hello world';

//  String包装了一下
console.log(str instanceof String)  // false

var str1 = new String('hello world')
console.log(str1 instanceof String, typeof str1)  // true  object
