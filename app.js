let num1 = 0;
let num2 = 0;
let operator;

function add(a, b) {
    return a + b;
};

function subtract(a, b){
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b){
    return a / b;
};

function operate(oper,a,b){
    let result = 0;
    switch(oper){
        case '+':
            result = add(a,b);
            break;
        case '-':
            result = subtract(a,b);
            break;
        case '*':
            result = multiply(a,b);
            break;
        case '/':
            result = divide(a,b);
            break;
        }
    return result
}