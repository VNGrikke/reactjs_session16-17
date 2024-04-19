function changeToNumber(value: any): number | null {
    let parsedValue = parseFloat(value);
    return isNaN(parsedValue) ? null : parsedValue;
}

function add<T>(a: T, b: T): T | string {
    let num1 = typeof a === 'number' ? a : changeToNumber(a);
    let num2 = typeof b === 'number' ? b : changeToNumber(b);
    if (num1 === null || num2 === null) {
        return 'Giá trị không hợp lệ';
    }
    return (num1 + num2) as T;
}

function subtract<T>(a: T, b: T): T | string {
    let num1 = typeof a === 'number' ? a : changeToNumber(a);
    let num2 = typeof b === 'number' ? b : changeToNumber(b);
    if (num1 === null || num2 === null) {
        return 'Giá trị không hợp lệ';
    }
    return (num1 - num2) as T;
}

function multiply<T>(a: T, b: T): T | string {
    let num1 = typeof a === 'number' ? a : changeToNumber(a);
    let num2 = typeof b === 'number' ? b : changeToNumber(b);
    if (num1 === null || num2 === null) {
        return 'Giá trị không hợp lệ';
    }
    return (num1 * num2) as T;
}

function divide<T>(a: T, b: T): T | string {
    let num1 = typeof a === 'number' ? a : changeToNumber(a);
    let num2 = typeof b === 'number' ? b : changeToNumber(b);
    if (num1 === null || num2 === null) {
        return 'Giá trị không hợp lệ';
    }
    if (num2 === 0) {
        return 'Không thể chia cho số 0';
    }
    return (num1 / num2) as T;
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
