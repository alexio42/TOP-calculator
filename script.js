let num1;
let num2;
let currentOperator;
let result;
let startNewNumber;

function add(num1, num2) {
    return ((num1 * 1000000000) + (num2 *1000000000)) / 1000000000;
};

function subtract(num1, num2) {
    return ((num1 * 1000000000) - (num2 *1000000000)) / 1000000000;;
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

function calculate(num1, num2, operator) {
    return operator(num1, num2);
};


const numKeys = document.querySelectorAll(".num-key");
const display = document.querySelector("#display");
const clear = document.querySelector("#clear");
const decimal = document.querySelector("#decimal");
const plusMinus = document.querySelector("#plus-minus");
const operators = document.querySelectorAll(".operators")
const allClear = document.querySelector("#allClear");
const equals = document.querySelector("#calculate");

for (const numKey of numKeys) {
    numKey.addEventListener("click", function() {

    inputNum(this.textContent);
        
    clicked(this.id);
  });
};


clear.addEventListener("click", function() { 
    display.textContent = "";
    clicked(this.id);
});


allClear.addEventListener("click", function() { 
    display.textContent = "";
    num1 = "";
    num2 = "";
    currentOperator = "";
    clicked(this.id);
});



decimal.addEventListener("click", function() {

    if (display.textContent.length == 0) {
    display.textContent = 0 + this.textContent;
    } 
    else if (display.textContent.length < 9 && display.textContent.includes(".") == false) {
        display.textContent += this.textContent;
    };

    clicked(this.id);

  });


plusMinus.addEventListener("click", function() {
    if (display.textContent.includes("-")) {
        display.textContent = display.textContent.slice(1);
    } else if (display.textContent.length < 9) {
    display.textContent = "-" + display.textContent; };

    clicked(this.id);
});


// add event listener to operators
for (const operation of operators) {
    operation.addEventListener("click", function() {
    
    currentOperator = this.id;  

    if (display.textContent == "") {
        num1 = 0
    } else {
        num1 = Number(display.textContent);
    };
    
    clicked(currentOperator);
    startNewNumber = 'yes';

  });
};


equals.addEventListener("click", function() {
    num2 = Number(display.textContent);

    operateFunction = (window[currentOperator]);
    result = calculate(num1, num2, operateFunction);
    console.log(result);
    displayResult(result);
    clicked(this.id);
})



function clicked(currentKey) {
      
    let activeButton = document.querySelector("#" + currentKey);

    activeButton.classList.add("clicked");

    setTimeout(function() {
      activeButton.classList.remove("clicked")
    }, 100);
  };



function displayResult(num) {
    if (num.toString().length > 9) {
        display.textContent = num.toExponential(2);
    } else {
        display.textContent = num;
    }
}

function inputNum(num) {
    if (startNewNumber === 'yes') {
        display.textContent = num;
        startNewNumber = "";
    } else if (display.textContent.length < 9) {
    display.textContent += num;
    } else {
        console.log("Too many numbers in display");
    };
}

document.addEventListener("keydown", function(event) {

    console.log(event.key);
    inputNumKeyboard(event.key)

  });

function inputNumKeyboard(key) {

    switch (key) {
        case "0":
            inputNum(key);
          break;

        case "1":
            inputNum(key);
          break;

        case "2":
            inputNum(key);
          break;

        case "3":
            inputNum(key);
          break;

        case "4":
            inputNum(key);
          break;

        case "5":
            inputNum(key);
          break;
        
        case "6":
            inputNum(key);
          break;

        case "7":
            inputNum(key);
          break;
        
        case "8":
            inputNum(key);
          break;

        case "9":
            inputNum(key);
          break;

        case "Backspace":
            display.textContent = display.textContent.slice(0, -1);
          break;
    }
}

