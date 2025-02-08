// Aufgabe 1
let arr = [4, 1, 2, 3];
arr.push(17);
arr.push(199);

// a.
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// b.
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log(sum);

// c.
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

let mean = sum / arr.length;
console.log(Math.floor(mean));


// Aufgabe 2
let array = ['Susi', 'Paula', 'Hans'];

console.log('Meine Freunde sind ' + array[0] + ', ' + array[1] + ' und ' + array[2]);
array.push('Sepp');

console.log('Meine Freunde sind ' + array[0] + ', ' + array[1] + ', ' + array[2] + ' und ' + array[3]);