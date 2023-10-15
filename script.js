let num1;
let num2;
let currentOperator;
let result;
let startNewNumber;
let clickedOnce;

function add(num1, num2) {
    return ((num1 * 1000000000) + (num2 *1000000000)) / 1000000000;
};

function subtract(num1, num2) {
    return ((num1 * 1000000000) - (num2 *1000000000)) / 1000000000;;
};

function multiply(num1, num2) {
    return ((num1 * 10000) * (num2 * 10000) / 100000000);
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
const flip = document.querySelector("button");
const wholeCalc = document.querySelector("#container")

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
    clickedOnce = "no"
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

    
    if (clickedOnce == 'yes') {
        num2 = Number(display.textContent);
        operateFunction = (window[currentOperator]);
        result = calculate(num1, num2, operateFunction);
        displayResult(result);
        currentOperator = '';
        num1 = Number(display.textContent);
    } else if (display.textContent == "") {
        num1 = 0;
        clickedOnce = 'yes';
    } else {
        num1 = Number(display.textContent);
        clickedOnce = 'yes';
    };

    currentOperator = this.id; 
    startNewNumber = 'yes';
   
    clicked(this.id)

  });
};


equals.addEventListener("click", function() {

    clicked(this.id);
    num2 = Number(display.textContent);
    operateFunction = (window[currentOperator]);
    result = calculate(num1, num2, operateFunction);
    displayResult(result);
    clickedOnce = 'no';

})




function clicked(currentKey) {
      
    let activeButton = document.querySelector("#" + currentKey);

    activeButton.classList.add("clicked");

    setTimeout(function() {
      activeButton.classList.remove("clicked")
    }, 100);
  };


  function displayResult(num) {
    if (num < 0.0000001 && num > 0) {
         display.textContent = num.toExponential(2);
    } else if (num > 999999999) {
         display.textContent = num.toExponential(2);
    } else {
         let textNum = num.toString();
         display.textContent = textNum.slice(0, 9);
    }
};


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

flip.addEventListener("click", function () {
    display.classList.toggle("flipped");
});


// for (const operation of operators) {
//   operation.addEventListener("click", function() {

//   if (clickedOnce = 'yes'){
//     num2 = Number(display.textContent);
//     operateFunction = (window[currentOperator]);
//     result = calculate(num1, num2, operateFunction);
//     displayResult(result);
//     clicked(this.id);
//     currentOperator = this.id;
    
//   } else {
//   currentOperator = this.id; 
//   clickedOnce = 'yes';  
//       if (display.textContent == "") {
//       num1 = 0
//   } else {
//       num1 = Number(display.textContent);
//   };
//   };

  
//   clicked(this.id);
//   startNewNumber = 'yes';

//   });
// };


// equals.addEventListener("click", function() {
//     num2 = Number(display.textContent);

//     operateFunction = (window[currentOperator]);
//     result = calculate(num1, num2, operateFunction);
//     displayResult(result);
//     clicked(this.id);
//     currentOperator = '';
// });