function compare<T, U>(param1: T, param2: U): boolean {
    return param1 === param2;// không thể so sánh vì khác kiểu dũ liệu
}

let text: string = "2";
let num: number = 2;

let result6: boolean = compare(text, num);
console.log("Kết quả:", result);
