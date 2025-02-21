// 1. keyword: let
// 2. variable: result
// 3. expression: 1 + 2
// 4. zuweisung: =
// 5. terminator: ;
// ==> statement: let result = 1 + 2;
let result = 1 + 2; //3

// 6. funcion: console.log
// 7. argument: result
// 8. terminator: ;
// ==> statement: console.log(rusult);
console.log(result);

// k = 3; d = 2;
// f(x) = k * x + d
// f(5) = 3 * 5 + 2 = 17

// code blocks
{
    let a = 10;
    let b = 20;

    let result = a + b;
}

// calculations

let a1 = 10;
let b1 = 20;

// addition
let sum = a1 + b1;

// subtraktion
let difference = a1 - b1;

// multiplication
let product = a1 * b1;

// division
let quotient = a1 / b1;

// modulo
let remainder = a1 % b1;

// exponentiation
let power = a1 ** b1;

// expression
let expression = (a1 + b1) * b1;

// assigment
a1 = 23;
b1 = 42;

// if statement
if (a1 < b1) {
    console.log('a1 is smaller than b1');
} else {
    console.log('a1 is not smaller than b1');
}

// if - else if - else statement
if (a1 == b1) {
    console.log('a1 equals b1');
} else if (a1 < b1) {
    console.log('a1 is not smaller than b1');
} else {
    console.log('a1 is greater than b1');
}

// loops
// for loop
for (let i = 0; i < 5; i++) {
    console.log('durchlauf: ' + i);
    console.log(i);
}


let integer = 213;
let floatingPoint = 3.141;
let boolean = true;

// strings (Zeichenketten)
let string = 'Hello World';
let string2 = 'Hallo';

let string1 = string + string2;
console.log('The result is: ' + result);

//function
function sum2(n1, n2) {
    return n1 + n2
}

let n1 = 5;
let n2 = 10;


let resultSum = sum2(5, 10);

//function kx + d, k = 10, d = 5;
function linearStraight(x) {
    return 10 * x + 5
}

sum2(10, 15);

function log(text) {
    console.log(text)
    return
}

log('hallo welt')


function log(text, repeat) {
    for (let i = 1; i < repeat; i++) {
        console.log(i + ': ' + text)
    }
    console.log(i);
}