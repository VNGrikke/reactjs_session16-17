"use strict";
function swap(arr, index1, index2) {
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
        return "lỗi";
    }
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}
let array = [1, 2, 3, 4, 5];
let swappedArray = swap(array, 1, 3);
console.log(swappedArray);
