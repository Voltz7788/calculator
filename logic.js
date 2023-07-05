let num1 = "";
let num2 = "";
let currentResult = "";
let operator = "";

let num1Available = true;
let num2Available = true;

let decimalAvailable = true;

function operate(operator, num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    if (operator === "+") {
        currentResult = num1 + num2;
        console.log(currentResult)
    } else if (operator === "-") {
        currentResult = num1 - num2;
        console.log(currentResult)
    } else if (operator === "*") {
        currentResult = num1 * num2;
        console.log(currentResult)
    } else if (operator === "/") {
        currentResult = num1 / num2;
        console.log(currentResult)
    } else if (operator === "%") {
        currentResult = num1 % num2;
        console.log(currentResult)
    } else {
        console.log(currentResult)
    };
};

function setUpNumberButtons() {
    let numberButtons = document.querySelectorAll(".numButton");
    numberButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (operator === "=") {
                clear();
            }

            if (num1Available) {
                num1 += button.id;
                console.log(num1);
            } else if (num2Available) {
                num2 += button.id;
                console.log(num2);
            };
        });
    });
};

function setUpOperatorButtons() {
    let operatorButtons = document.querySelectorAll(".opButton");
    operatorButtons.forEach(button => {
        button.addEventListener("click", () => {
            
            if (num1Available) {
                num1Available = false;
                operator = button.id;
                decimalAvailable = true;
                
                
            } else if (num2Available) {
                
                // num2Available = false;
                operate(operator, num1, num2)
                decimalAvailable = true;
                operator = button.id;
                num1 = currentResult;
                num2 = "";
            };
        });
    });
};

function setUpDecimalButton() {
    let decimalButton = document.querySelector(".decimalButton");
    decimalButton.addEventListener("click", () => {
        if (decimalAvailable && num1Available) {
            num1 += decimalButton.id;
            console.log(num1)
            decimalAvailable = false;
        } else if (decimalAvailable && num2Available) {
            num2 += decimalButton.id;
            decimalAvailable = false;
        }
    });
};


function setUpClearButton() {
    let clearButton = document.querySelector("#AC");
    clearButton.addEventListener("click", clear());
};

function clear() {
    num1 = "";
    num2 = "";
    operator = "";

    num1Available = true;
    num2Available = true;

    decimalAvailable = true;
};


function startApp() {
    setUpNumberButtons()
    setUpOperatorButtons()
    setUpDecimalButton()
    setUpClearButton()
};

startApp()
