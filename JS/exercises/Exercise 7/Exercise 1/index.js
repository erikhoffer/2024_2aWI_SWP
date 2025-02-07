let input = "1 2 3 4";
let x_n = input.split(" ").map(Number);

let SumOfNumbers = 0;

for (let i = 0; i <= input.length; i++) {
    if (x_n[i] % 2 == 0) {
        SumOfNumbers += x_n[i];
    }
}

console.log(SumOfNumbers);