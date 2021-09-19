// double a number

function doubleIt(num) {
    let double = num + num;
    return double;

}

let result = doubleIt(6);
console.log(result);

// fibonacci number 

function fibonacciIt(num) {
    let fibonacci = 1;
    for (let i = 1; i <= num; i++) {
        fibonacci = fibonacci * i;
    }
    return fibonacci;
}

console.log(fibonacciIt(1));

// sumatoion of a number of series

function sumItAll(num) {
    let sum = 0;
    for (i = 0; i <= num; i++) {
        sum = sum + i;
    }
    return sum;
}

console.log(sumItAll(10));