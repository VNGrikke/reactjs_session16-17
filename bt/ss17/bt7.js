"use strict";
function cong(a, b) {
    return a + b;
}
function tru(a, b) {
    return a - b;
}
function nhan(a, b) {
    return a * b;
}
function chia(a, b) {
    return a / b;
}
let num1 = 10;
let num2 = 5;
let num3;
// Thực hiện các phép tính với kiểu dữ liệu number
num3 = cong(num1, num2);
console.log("cộng:", num3);
num3 = tru(num1, num2);
console.log("trừ:", num3);
num3 = nhan(num1, num2);
console.log("nhân:", num3);
num3 = chia(num1, num2);
console.log("chia:", num3);
// Thay đổi kiểu dữ liệu của biến num1 thành string và num2 thành boolean
let strNum1 = "10";
let boolNum2 = true;
// Thực hiện lại các phép tính
console.log("Kết quả cộng sau khi thay đổi kiểu:", cong(strNum1, boolNum2));
console.log("Kết quả trừ sau khi thay đổi kiểu:", tru(strNum1, boolNum2));
console.log("Kết quả nhân sau khi thay đổi kiểu:", nhan(strNum1, boolNum2));
console.log("Kết quả chia sau khi thay đổi kiểu:", chia(strNum1, boolNum2));
