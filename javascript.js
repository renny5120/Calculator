function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return +(a / b).toFixed(2);
}

function operate(op, a, b) {
    switch (op) {
        case '+':
            return add(a, b);

        case '-':
            return subtract(a, b);

        case 'x':
            return multiply(a, b);

        case '/':
            return divide(a, b);

    }
}


// text for display div
const display = document.querySelector('.display');
let displayNum = '';
let clearDisplay = false;
display.textContent = displayNum;

// listener for numbers
const numbers = document.querySelectorAll('.numbers');
numbers.forEach((div) => {
    div.addEventListener('click', function (e) {
        // ignores the "numbers" div
        if (e.target.innerText.length > 1) {
            return;
        }
        // clears display if operator was clicked before
        if (clearDisplay == true) {
            displayNum = '';
            clearDisplay = false;
        }
        // adds number to display
        displayNum += e.target.innerText;
        display.textContent = displayNum;
    });
});

// storing operator and number
let savedOp = '';
let savedNum = '';

// listener for operators
const operators = document.querySelectorAll('.operators');
operators.forEach((div) => {
    div.addEventListener('click', function (e) {
        let operation = e.target.innerText;
        clearDisplay = true;

        // evaluates numbers and operators
        if(savedOp != '' && savedNum != ''){
            // if user divides by 0
            if(savedOp == '/' && displayNum == 0){
                displayNum = "DON'T DIVIDE BY ZERO! >:C";
                display.textContent = displayNum;
                savedOp = '';
                savedNum = '';
                return;
            }
            // evaluates new number
            displayNum = operate(savedOp, Number(savedNum), Number(displayNum));
            console.log(displayNum);
            display.textContent = displayNum;
            savedOp = '';
        }

        // clear
        if (operation == 'clear') {
            savedOp = '';
            savedNum = '';
            displayNum = '';
            display.textContent = displayNum;
            return;
        }

        // add
        if (operation == '+') {
            savedOp = '+';
            savedNum = displayNum;
            return;
        }

        // subtract
        if (operation == '-') {
            savedOp = '-';
            savedNum = displayNum;
            return;
        }

        // multiply
        if (operation == 'x') {
            savedOp = 'x';
            savedNum = displayNum;
            return;
        }

        // divide
        if (operation == '/') {
            savedOp = '/';
            savedNum = displayNum;
            return;
        }
    });
});


