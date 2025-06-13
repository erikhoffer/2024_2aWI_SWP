let input = "5 1 -2 -8 4 5";
let zahlen = input.split(" ").map(Number);
let Betragnumbers = zahlen.map(Betrag);

function Betrag(zahl) {
    if (zahl < 0) {
        return zahl * -1;
    } else if (zahl >= 0) {
        return zahl;
    }
}
function nearest(temperatur, numbers) {
    let nearestNumber = numbers[0];
    let nearestBetrag = temperatur[0];

    for (let i = 1; i < temperatur.length; i++) {
        if (temperatur[i] < nearestBetrag) {
            nearestBetrag = temperatur[i];
            nearestNumber = numbers[i];
        } else if (temperatur[i] === nearestBetrag) {

            if (numbers[i] > nearestNumber) {
                nearestNumber = numbers[i];
            }
        }
    }

    return nearestNumber;
}
console.log(nearest(Betragnumbers, zahlen));
