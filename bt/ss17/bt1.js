"use strict";
function identity(arg) {
    return arg;
}
let result1 = identity(10);
let result2 = identity("hello");
let result3 = identity(true);
let result4 = identity([1, 2, 3]);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
