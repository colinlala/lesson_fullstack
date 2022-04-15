function f(x, y, z) {
    // ...
    console.log(x,y,z);
  }
  var args = [0, 1, 2];
  f.apply(null, args);
  
  console.log('------------------');
  // ES6 的写法
  function f(x, y, z) {
    // ...
    console.log(x,y,z);
  }
  let args1 = [0, 1, 2];
  f(...args1);


// const [...butLast, last] = [1, 2, 3, 4, 5];  // 报错
// const [first, ...middle, last] = [1, 2, 3, 4, 5];   // 报错
const [first,last ,...middle ] = [1, 2, 3, 4, 5];
console.log(middle)


console.log(
    [1, 5, 10, 15].find(
        function(value, index, arr) {
            return value > 9;
        }
    ) 
);   //10

console.log(
    [1, 5, 10, 15].findIndex(
        function(value, index, arr) {
            return value > 9;
        }
    ) 
);   //2


console.log([1,2,3].includes(2,-2))


console.log([1,2,3,[4,5,[6,7]]].flat())
console.log([1,2,3,[4,5,[6,7]]].flat(2))

