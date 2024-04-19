"use strict";
function changeToNumber(value) {
    let parsedValue = parseFloat(value);
    return isNaN(parsedValue) ? null : parsedValue;
}
function add(a, b) {
    let num1 = typeof a === 'number' ? a : changeToNumber(a);
    let num2 = typeof b === 'number' ? b : changeToNumber(b);
    if (num1 === null || num2 === null) {
        return 'Giá trị không hợp lệ';
    }
    return (num1 + num2);
}
function subtract(a, b) {
    let num1 = typeof a === 'number' ? a : changeToNumber(a);
    let num2 = typeof b === 'number' ? b : changeToNumber(b);
    if (num1 === null || num2 === null) {
        return 'Giá trị không hợp lệ';
    }
    return (num1 - num2);
}
function multiply(a, b) {
    let num1 = typeof a === 'number' ? a : changeToNumber(a);
    let num2 = typeof b === 'number' ? b : changeToNumber(b);
    if (num1 === null || num2 === null) {
        return 'Giá trị không hợp lệ';
    }
    return (num1 * num2);
}
function divide(a, b) {
    let num1 = typeof a === 'number' ? a : changeToNumber(a);
    let num2 = typeof b === 'number' ? b : changeToNumber(b);
    if (num1 === null || num2 === null) {
        return 'Giá trị không hợp lệ';
    }
    if (num2 === 0) {
        return 'Không thể chia cho số 0';
    }
    return (num1 / num2);
}
console.log(add(8, 2));
console.log(add("8", "2"));
console.log(subtract(8, 2)); // 
console.log(subtract("8", "2"));
console.log(multiply(8, 2));
console.log(multiply("8", "2"));
console.log(divide(8, 2));
console.log(divide("8", "2"));
console.log(divide(8, 0));
