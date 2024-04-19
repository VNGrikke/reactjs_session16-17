function printHello<T>(condition: boolean): void {
    if (condition) {
        console.log("Xin chiều e nghi");
    } else {
        console.log("chiều e đi học");
    }
}

let x: boolean = true; 

printHello(x);
