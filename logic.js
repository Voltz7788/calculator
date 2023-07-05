let num1 = "";
let num2 = "";
let currentResult = "";
let operator = "";

let num1Available = true;
let num2Available = true;

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
    } else {
        console.log(currentResult)
    };
};

function setUpNumberButtons() {
    let numberButtons = document.querySelectorAll(".numButton");
    numberButtons.forEach(button => {
        button.addEventListener("click", () => {
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
                
            } else if (num2Available) {
                
                // num2Available = false;
                operate(operator, num1, num2)
                operator = button.id;
                num1 = currentResult;
                num2 = "";
            };
        });
    });
};

function setUpClearButton() {

};




function startApp() {
    setUpNumberButtons()
    setUpOperatorButtons()
    setUpClearButton()
};

startApp()
