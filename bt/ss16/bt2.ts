function hoanDoiPhanTu<T>(arr: T[], param1: number, param2: number): T[] {
    if (param1 < 0 || param1 >= arr.length || param2 < 0 || param2 >= arr.length) {
        console.log("lỗi");
        return []
    }

    const temp: T = arr[param1];
    arr[param1] = arr[param2];
    arr[param2] = temp;

    return arr;
}

const numbers: number[] = [1, 2, 3, 4, 5];
console.log(hoanDoiPhanTu(numbers, 1, 3)); 

const strings: string[] = ["A", "B", "C", "D", "E"];
console.log(hoanDoiPhanTu(strings, 0, 4)); 
