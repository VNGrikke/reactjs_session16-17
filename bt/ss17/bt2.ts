function swap<T>(arr: T[], index1: number, index2: number): T[]|string {
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
        return "lỗi"
    }

    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;

    return arr;
}

let array: number[] = [1, 2, 3, 4, 5];
let swappedArray = swap(array, 1, 3);
console.log(swappedArray);
