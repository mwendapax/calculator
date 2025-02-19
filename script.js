const calcScreen = document.querySelector('#calc-screen');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');
const divide = document.querySelector('#divide');
const multiply = document.querySelector('#multiply');
const subtract = document.querySelector('#subtract');
const add = document.querySelector('#add');
const equals = document.querySelector('#equals');
const undo = document.querySelector('#undo');
const clear = document.querySelector('#clear');
const decimal = document.querySelector('#point');

let currentCalc = '';

one.addEventListener('click', () => {
    currentCalc += '1';
    calcScreen.textContent = currentCalc;
});

two.addEventListener('click', () => {
    currentCalc += '2';
    calcScreen.textContent = currentCalc;
});

three.addEventListener('click', () => {
    currentCalc += '3';
    calcScreen.textContent = currentCalc;
});

four.addEventListener('click', () => {
    currentCalc += '4';
    calcScreen.textContent = currentCalc;
});

five.addEventListener('click', () => {
    currentCalc += '5';
    calcScreen.textContent = currentCalc;
});

six.addEventListener('click', () => {
    currentCalc += '6';
    calcScreen.textContent = currentCalc;
});

seven.addEventListener('click', () => {
    currentCalc += '7';
    calcScreen.textContent = currentCalc;
});

eight.addEventListener('click', () => {
    currentCalc += '8';
    calcScreen.textContent = currentCalc;
});

nine.addEventListener('click', () => {
    currentCalc += '9';
    calcScreen.textContent = currentCalc;
});

zero.addEventListener('click', () => {
    currentCalc += '0';
    calcScreen.textContent = currentCalc;
});

divide.addEventListener('click', () => {
    currentCalc += '/';
    calcScreen.textContent = currentCalc;
});

multiply.addEventListener('click', () => {
    currentCalc += '*';
    calcScreen.textContent = currentCalc;
});

subtract.addEventListener('click', () => {
    currentCalc += '-';
    calcScreen.textContent = currentCalc;
});

add.addEventListener('click', () => {
    currentCalc += '+';
    calcScreen.textContent = currentCalc;
});

equals.addEventListener('click', () => {
    currentCalc += '=';
    getNumbers(currentCalc);
});

undo.addEventListener('click', () => {
    currentCalc = currentCalc.slice(0, -1); 
    calcScreen.textContent = currentCalc;
});

clear.addEventListener('click', () => {
    currentCalc = '';
    calcScreen.textContent = currentCalc;
});

decimal.addEventListener('click', () => {
    currentCalc += '.';
    calcScreen.textContent = currentCalc;
})

let numberOne = '';
let operator;
let numberTwo;
let result;

function operate(operandOne, operatorItem, operandTwo) {
    operandOne = Number(operandOne);
    operandTwo = Number(operandTwo);

    console.log(operandOne);
    console.log(operandTwo);

    switch (operatorItem) {
        case '+':
            return operandOne + operandTwo;
        case '-':
            return operandOne - operandTwo;
        case '*':
            return operandOne * operandTwo;
        case '/':
            return operandOne / operandTwo;
        default:
            return NaN; 
    }
}

function getNumbers(stringNumber) {
    numberOne = '';
    operator = undefined;
    numberTwo = '';

    for (let item of stringNumber) {
        if (!isNaN(item) && operator === undefined) {
            numberOne += item;
        } else if (!isNaN(item) && operator != undefined) {
            numberTwo += item;
        } else if (isNaN(item) && item !== '=' && item != '.' && operator == undefined) {
            operator = item;
        } else if (isNaN(item) && item == '.' && operator == undefined){
            if(!(numberOne.includes(item))){
                numberOne += item;
            }
        }else if (isNaN(item) && item == '.' && operator != undefined){
            if(!(numberTwo.includes(item))){
                numberTwo += item;
            }
        } else if (isNaN(item) && item != '=' && item != '.' && operator != undefined){
            result = operate(numberOne, operator, numberTwo);
            numberOne = ''
            numberOne = result.toString();
            numberOne.slice(0, -1);
            operator = item;
            calcScreen.textContent = numberOne;

            
            numberTwo = '';

        } else if (item === '=') {
            result = operate(numberOne, operator, numberTwo);
            console.log(operator, numberOne, numberTwo)
            currentCalc = result.toString();
            calcScreen.textContent = currentCalc;

            
            numberOne = '';
            operator = undefined;
            numberTwo = '';
        }
    }
}