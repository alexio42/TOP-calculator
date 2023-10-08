function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    if(num2 != 0){
        return num1 / num2;
    } else {
        return "ERROR";
    };
};

/* divide function as turnary:

function divideTurn(num1, num2){
    return num2 != 0 ? num1 / num2 : "ERROR";
} 
*/

function operate(num1, num2, operator) {
    return operator(num1, num2);
};

const numKeys = document.querySelectorAll(".num-key");
const display = document.querySelector("#display");
const clear = document.querySelector("#clear");
const decimal = document.querySelector("#decimal");

for (const numKey of numKeys) {
    numKey.addEventListener("click", function() {

    if (display.textContent.length < 9) {
    display.textContent += this.textContent;
    } else {
        console.log("Too many numbers in display");
    };
        
  });
};

clear.addEventListener("click", () => display.textContent = "");

decimal.addEventListener("click", function() {

    if (display.textContent.length == 0) {
    display.textContent = 0 + this.textContent;
    } 
    else if (display.textContent.length < 9 && display.textContent.includes(".") == false) {
        display.textContent += this.textContent;
    }; 
    
  });