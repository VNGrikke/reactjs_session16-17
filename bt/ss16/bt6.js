"use strict";
function compare(param1, param2) {
    return param1 === param2; // không thể so sánh vì khác kiểu dũ liệu
}
let text = "2";
let num = 2;
let result6 = compare(text, num);
console.log("Kết quả:", result);
