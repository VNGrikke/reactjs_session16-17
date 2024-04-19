function identity<T>(arg: T): T {
    return arg;
}

let result1: number = identity(10); 
let result2: string = identity("hello");
let result3: boolean = identity(true);
let result4: number[] = identity([1, 2, 3]);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
