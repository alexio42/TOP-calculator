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