function flatten<T>(arr: T[]): T[] {
    let result: T[] = [];

    arr.forEach(item => {
        if (Array.isArray(item)) {
            result.push(...flatten(item));
        } else {
            result.push(item);
        }
    });

    return result;
}

let arr = [1, [2, [3, 4], 5], 6];

let arr2 = flatten(arr);
console.log(arr);
