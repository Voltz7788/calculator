let num1 = "";
let num2 = "";
let currentResult = "0";
let operator = "";

let num1Available = true;
let num2Available = true;

let decimalAvailable = true;

function operate(operator, num1, num2) {
    let display = document.querySelector(".display");
    num1 = Number(num1);
    num2 = Number(num2);
    
    if (operator === "+") {
        currentResult = num1 + num2;
        console.log(currentResult)
    } else if (operator === "-") {
        currentResult = num1 - num2;
    } else if (operator === "*") {
        currentResult = num1 * num2;
    } else if (operator === "/") {
        currentResult = num1 / num2;
        checkDivideByZero()
    } else if (operator === "%") {
        currentResult = num1 % num2;
    } else {
        if  (num1 === "" || num2 === "") {
            currentResult = "0";
        };
    };

    if (num1 === 2099 || num2 === 2099 || currentResult === 2099) {
        let audio = document.getElementById("spiderman");
        audio.play()
        display.style.fontSize = "32px";
        currentResult = "CANON DISRUPTED";
        setTimeout(() => {
            document.getElementById("overlay").style.display = "block";
        }, 800);
        
    };
};

function setUpNumberButtons() {
    let numberButtons = document.querySelectorAll(".numButton");
    let display = document.querySelector(".display");
    numberButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (operator === "=") {
                clear();
            }
            if (num1Available) {
                num1 += button.id;
                display.textContent = num1;
            } else if (num2Available) {
                num2 += button.id;
                display.textContent = num2;
            };
        });
    });
};

function setUpOperatorButtons() {
    let display = document.querySelector(".display");
    let operatorButtons = document.querySelectorAll(".opButton");
    operatorButtons.forEach(button => {
        button.addEventListener("click", () => {
            
            if (num1Available && button.id !== "=") {
                num1Available = false;
                operator = button.id;
                decimalAvailable = true;
            } else if (num2Available && num1 !== "") {
                operate(operator, num1, num2)
                decimalAvailable = true;
                display.textContent = currentResult;
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
            decimalAvailable = false;
        } else if (decimalAvailable && num2Available) {
            num2 += decimalButton.id;
            decimalAvailable = false;
        }
    });
};

function checkDivideByZero() {
    if (num2 === "0") {
        currentResult = "Stupid";
        clear()
    };
};

function setUpClearButton() {
    let display = document.querySelector(".display");
    let clearButton = document.querySelector("#AC");
    clearButton.addEventListener("click", () => {
        clear()
        display.textContent = 0;
    });
};

function clear() {
    num1 = "";
    num2 = "";
    operator = "";
    currentResult = "0";

    num1Available = true;
    num2Available = true;

    decimalAvailable = true;
};

function setUpFlipButton() {
    let display = document.querySelector(".display");
    let flipButton = document.querySelector("#flip");

    flipButton.addEventListener("click",() => {
        if (currentResult !== "") {
            currentResult = -currentResult;
            display.textContent = currentResult;
        } else if (num1Available) {
            num1 = -num1;
            display.textContent = num1;
        } else if (num2Available) {
            num2 = -num2;
            display.textContent(num2);
        };
    }); 
};


function startApp() {
    setUpNumberButtons()
    setUpOperatorButtons()
    setUpDecimalButton()
    setUpClearButton()
    setUpFlipButton()
};

startApp()
