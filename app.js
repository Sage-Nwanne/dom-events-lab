
// Here are the user stories for this lab:

// As a user, I want to be able to select numbers so that I can perform operations with them.
// As a user, I want to be able to add two numbers together.
// As a user, I want to be able to subtract one number from another.
// As a user, I want to be able to multiply two numbers together.
// As a user, I want to be able to divide one number by another.
// As a user, I want to be able to see the output of the mathematical operation.
// As a user, I want to be able to clear all operations and start from 0.


/*-------------------------------- Variables --------------------------------*/
let firstNumb = []; // clickedNumb is join()'ed and stored here
let secondNumb = [];
let operation;
let maxDigits = 6;
let isSecondNumb = false; // flag to determine if we are inputting the 2nd number

/*------------------------ Cached Element References ------------------------*/
const display = document.querySelector('.display');

/*-------------------------------- Functions --------------------------------*/

const userNumbInput = (event) => {
    if (event.target.classList.contains('number')) {
        if (isSecondNumb === false) {
            firstNumb.push(event.target.innerText);
            display.textContent = firstNumb.join('');
        } else {
            secondNumb.push(event.target.innerText);
            display.textContent = `${firstNumb.join('')} ${operation} ${secondNumb.join('')}`;
        }
    }
};

const operatorInput = (event) => {
    if (event.target.classList.contains('operator')) {
        if (!isSecondNumb && firstNumb.length > 0) {
            operation = event.target.innerText;
            isSecondNumb = true; // Switch to inputting second number
            display.textContent = `${firstNumb.join('')} ${operation}`;
        }
    }
};

const calculate = () => {
    if (firstNumb.length > 0 && secondNumb.length > 0 && operation) {
        let num1 = parseFloat(firstNumb.join(''));
        let num2 = parseFloat(secondNumb.join(''));
        let result;

        switch (operation) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
                break;
            default:
                result = 'Invalid operation';
                break;
        }

        display.textContent = result;
        firstNumb = [result.toString()];
        secondNumb = [];
        operation = null;
        isSecondNumb = false;
    }
};

const clearDisplay = () => {
    firstNumb = [];
    secondNumb = [];
    operation = null;
    isSecondNumb = false;
    display.textContent = '0';
};

/*----------------------------- Event Listeners -----------------------------*/
const calculator = document.querySelector('#calculator');

calculator.addEventListener('click', (event) => {
    if (event.target.classList.contains('number')) {
        userNumbInput(event);
    }
    if (event.target.classList.contains('operator')) {
        operatorInput(event);
    }
    if (event.target.classList.contains('equals')) {
        calculate();
    }
    if (event.target.innerText === 'C') {
        clearDisplay();
    }
});
