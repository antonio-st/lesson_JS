var buttonPlus = document.getElementById('buttonPlus');
var buttonMinus = document.getElementById('buttonMinus');
var buttonMultiply = document.getElementById('buttonMultiply');
var buttonDevide = document.getElementById('buttonDevide');
var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');
var countResult = document.getElementById('result');


function makeOperation(operationCode) {
var number1 = Number(input1.value);
var number2 = Number(input2.value);
    if (operationCode === '+') {
        var result = number1 + number2;
    } else if (operationCode === '-') {
        var result = number1 - number2;
    }
    else if (operationCode === '*') {
        var result = number1 * number2;
    }
    else if (operationCode === '/') {
        var result = number1 / number2;
    }
    else {
        countResult.value = 'operation is unknown';
    }
    countResult.value = result;
}

function onButtonPlusClick() {
    makeOperation('+');
}
function onButtonMinusClick() {
    makeOperation('-');
}
function onButtonMultiplyClick() {
    makeOperation('*');
}
function onButtonDevideClick() {
    makeOperation('/');
}

function operationButtonClick(eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation);
}

buttonPlus.addEventListener('click', operationButtonClick);
buttonMinus.addEventListener('click', operationButtonClick);
buttonMultiply.addEventListener('click', operationButtonClick);
buttonDevide.addEventListener('click', operationButtonClick);