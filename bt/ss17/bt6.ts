function compareValues(target: any, key: string, descriptor: TypedPropertyDescriptor<(...args: any[]) => void>) {
    let originalMethod = descriptor.value;

    descriptor.value = function(this: any, ...args: any[]) {
        let value1 = args[0];
        let value2 = args[1];
        
        let result = value1 === value2 ? "Hai giá trị bằng nhau" : "Hai giá trị không bằng nhau";

        console.log(result);
    };

    return descriptor;
}

class Comparison {
    compare(value1: any, value2: any) {
    }
}

let comparison = new Comparison();
comparison.compare("2", 2);
