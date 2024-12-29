const resultElement = document.getElementById('result');
const inputElement1 = document.getElementById('input1');
const inputElement2 = document.getElementById('input2');
const buttonElement = document.getElementById('solve');
const plusElement = document.getElementById('plus');
const minusElement = document.getElementById('minus');
const timesElement = document.getElementById('times');
const devideElement = document.getElementById('devide');
let action = '+';

plusElement.onclick = function () {
    action = '+';
}
minusElement.onclick = function () {
    action = '-';
}
timesElement.onclick = function () {
    action = '*';
}
devideElement.onclick = function () {
    action = '/';
}

buttonElement.onclick = function () {
    if (action == '+') {
        const sum = Number(inputElement1.value) + Number(inputElement2.value);
        resultElement.textContent = sum;
    }  
    else if(action == '-') {
        const sum = Number(inputElement1.value) - Number(inputElement2.value);
        resultElement.textContent = sum;
    }
    else if(action == '*') {
        const sum = Number(inputElement1.value) * Number(inputElement2.value);
        resultElement.textContent = sum;
    }
    else if(action == '/') {
        const sum = Number(inputElement1.value) / Number(inputElement2.value);
        resultElement.textContent = sum;
    }
}
