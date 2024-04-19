function Result<T>(param: T): T {
    return param;
}

let result1: string = Result("chiều e nghỉ học");
let result2: number = Result(123);
let result3: boolean = Result(true);
let result4: number[] = Result([1, 2, 3]);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
