let P = 20;
let H = 100;
let R = 6;

let income = P * H;

if (income < R) {
    console.log('NO');
} else if (income === R) {
    console.log('Barley');
} else {
    console.log('Yes');
}