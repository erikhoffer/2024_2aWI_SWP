let banana = "Banane";
let apple = "Apple";

let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;

let averageWeightBanana = 0.22;
let averageWeightApple = 0.34;


//Anzahl Bananen/Äpfel pro Kilo
let bananaPerKilo = Math.round(1 / averageWeightBanana);
let applePerKilo = Math.round(1 / averageWeightApple);

console.log("Anzahl Bananen pro Kilo: " + bananaPerKilo);
console.log("Anzahl Äpfel pro Kilo: " + applePerKilo);


//Preis pro Banane/Apfel
let pricePerBanana = (bananaPricePerKilo / bananaPerKilo).toFixed(2);
let pricePerApple = (applePricePerKilo / applePerKilo).toFixed(2);

console.log("Preis pro Banane: " + pricePerBanana + "€");
console.log("Preis pro Apfel: " + pricePerApple + "€");


//Preis von 8 Äpfeln/17 Bananen
console.log("Preis von 8 Bananen: " + (pricePerBanana * 17) + "€");
console.log("Preis von 8 Äpfel: " + (pricePerApple * 8) + "€");


//Preis von 1 Tonne Bananen/Äpfel
console.log("Preis von 1 Tonne Bananen: " + (bananaPricePerKilo * 1000) + "€");
console.log("Preis von 1 Tonne Äpfel: " + (applePricePerKilo * 1000) + "€");    