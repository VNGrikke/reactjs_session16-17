"use strict";
function printData(params) {
    return params;
}
let undefinedVariable;
let numberVariable = 10;
let anyVariable;
console.log(printData(undefinedVariable)); // được khai báo kiểu dữ liệu undefined và không đưcọ gán giá trị nên sẽ log ra undefined
console.log(printData(numberVariable)); //  được khai báo là number và gán giá trị là 10, nên khi in ra, giá trị của nó là 10.
console.log(printData(anyVariable)); // không được khai báo kiểu dữ liệu nên máy sẽ mặc định là kiểu any và không được gán giá trị nên sẽ log ra undefined
