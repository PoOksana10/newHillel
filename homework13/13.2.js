let firstNumber;
let secondNumber;
let userOperator;
const availableOperators = ['+', '-', '*', '/', '%', '**'];

function firstEntryNumber() {
    firstNumber = prompt('Please input first number').trim();
    if (isNaN(firstNumber)) {
        alert("This is not a number. Please try again!")
        firstEntryNumber()
    } else {
        secondEntryNumber()
    }
}

function secondEntryNumber() {
    secondNumber = prompt("Please input second number").trim();
    if (isNaN(secondNumber)) {
        alert("This is not a number. Please try again!");
        secondEntryNumber();
    } else {
        userOperatorChoice();
    }
}

function userOperatorChoice() {
    let result;
    userOperator = prompt("Please input operator from '+', '-', '*', '/', '%', '**' ").trim();
    if (availableOperators.includes(userOperator)) {
        if (userOperator === '+') {
            result = Number(Number(firstNumber) + Number(secondNumber))
        } else if (userOperator === '-') {
            result = firstNumber - secondNumber
        } else if (userOperator === '*') {
            result = firstNumber * secondNumber
        } else if (userOperator === '/') {
            result = firstNumber / secondNumber
        } else if (userOperator === '%') {
            result = firstNumber % secondNumber
        } else if (userOperator === '**') {
            result = firstNumber ** secondNumber
        }
        document.write('The result is ' + result)
    } else {
        alert('There is no such operator - please try again!')
        userOperatorChoice()
    }
}

firstEntryNumber()