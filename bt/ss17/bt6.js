"use strict";
function compareValues(target, key, descriptor) {
    let originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        let value1 = args[0];
        let value2 = args[1];
        let result = value1 === value2 ? "Hai giá trị bằng nhau" : "Hai giá trị không bằng nhau";
        console.log(result);
    };
    return descriptor;
}
class Comparison {
    compare(value1, value2) {
    }
}
let comparison = new Comparison();
comparison.compare("2", 2);
