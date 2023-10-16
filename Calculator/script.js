const displayBar = document.querySelector(".display");

const calculator = document.querySelector(".calculator");

const operatorMapping = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "x": (a, b) => a * b,
    "/": (a, b) => a / b,
};

let operatorClicked = false;
let previousResult = "";
let operator;

function handleBtnClick (e) {
    //處裡所有數字
    if (e.target.classList.contains("number")) {
        //當點擊運算符後的判斷
        if (operatorClicked) {
            displayBar.value = ""; 
            operatorClicked = false;
        }
        if (displayBar.value === "0") {
            displayBar.value = e.target.textContent;
            return;
        }
        displayBar.value += e.target.textContent;
    }
    //處裡運算符
    if (e.target.classList.contains("operator")) {
        operator = operatorMapping[e.target.textContent];
        previousResult = displayBar.value;
        operatorClicked = true;
    }
    // 等號
    if (e.target.classList.contains("equal")) {
        displayBar.value = operator(
            Number(previousResult),
            Number(displayBar.value)
        );
        previousResult = "";
        operatorClicked = false;
        operator = null;
    }
    // 重置
    if (e.target.classList.contains("clear")) {
        displayBar.value = "";
    }
}

//這裡建立監聽器
calculator.addEventListener("click", handleBtnClick);