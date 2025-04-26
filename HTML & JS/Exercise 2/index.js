
function calculateSum() {
    console.log('Calculate clicked!')

    let num1 = document.getElementById('inputA').value;
    let num2 = document.getElementById('inputB').value;

    let result = parseFloat(num1) + parseFloat(num2);
    console.log(result);
}