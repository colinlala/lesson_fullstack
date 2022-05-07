let arr2 = ['c', 'd'];
arr2[Symbol.isConcatSpreadable] = false;
// ['a', 'b', ['c','d'], 'e']
console.log(['a', 'b'].concat(arr2, 'e'))

let obj = { length: 2, 0: 'c', 1: 'd' };
console.log(['a', 'b'].concat(obj, 'e'))// ['a', 'b', obj, 'e']

obj[Symbol.isConcatSpreadable] = true;
console.log(['a', 'b'].concat(obj, 'e'))// ['a', 'b', 'c', 'd', 'e']