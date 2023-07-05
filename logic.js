let num1 = "";
let num2 = "";
let operator = "";

let num1Available = true;
let num2Available = true;

function operate(operator, num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else if (operator === "/") {
        return num1 / num2;
    };
};

function setUpNumberButtons() {
    let numberButtons = document.querySelectorAll(".numButton");
    numberButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (num1Available) {
                num1 += button.id;
            } else if (num2Available) {
                num2 += button.id;
            };
        });
    });
};

function setUpOperatorButtons() {
    let operatorButtons = document.querySelectorAll(".opButton");
    operatorButtons.forEach(button => {
        button.addEventListener("click", () => {

            operator = button.id;

            if (num1Available) {
                num1Available = false;
                console.log(num1);
            } else if (num2Available) {
                console.log(num2);
                num2Available = false;
                console.log(operate(operator, num1, num2));
            }
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
