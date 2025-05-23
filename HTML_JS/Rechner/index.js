
function addNumbers() {
    let Number1 = document.getElementById('input1').value;
    let Number2 = document.getElementById('input2').value;

    let result = Number(Number1) + Number(Number2);
    let output = document.getElementById('output');
    output.innerHTML = result;
}

function subtractNumbers() {
    let Number1 = document.getElementById('input1').value;
    let Number2 = document.getElementById('input2').value;

    let result = Number(Number1) - Number(Number2);
    let output = document.getElementById('output');
    output.innerHTML = result;
}

function multiplyNumbers() {
    let Number1 = document.getElementById('input1').value;
    let Number2 = document.getElementById('input2').value;

    let result = Number(Number1) * Number(Number2);
    let output = document.getElementById('output');
    output.innerHTML = result;
}

function divideNumbers() {
    let Number1 = document.getElementById('input1').value;
    let Number2 = document.getElementById('input2').value;

    let result = Number(Number1) / Number(Number2);
    let output = document.getElementById('output');
    output.innerHTML = result;
}


