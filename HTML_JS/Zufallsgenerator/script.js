function generate() {

    let Number1 = document.getElementById('input_min').value;
    let Number2 = document.getElementById('input_max').value;

    let difference = parseInt(Number2) - parseInt(Number1);

    let randomNumber = Math.floor(Math.random() * difference) + parseInt(Number1) + 1;
    console.log(randomNumber);

    document.getElementById("output").innerHTML = randomNumber;
}