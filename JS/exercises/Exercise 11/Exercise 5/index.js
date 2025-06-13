let input = '1,2,3,4,5,6,7,8,9,10,11,12';
let array = input.split(',').map(Number);
let evenNumbers = 0;
let unevenNumbers = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        evenNumbers += array[i];
    } else {
        unevenNumbers += array[i];
    }
}

let result = evenNumbers / unevenNumbers;
console.log(result);