const calc = document.querySelectorAll('.line > div');
const calcScreen = document.querySelector('.calc-screen');
let num1 = 0;
let num2 = 0;
let operator = '';

calc.forEach(number => number.addEventListener('click',(e) => checkCalcInput(e.target.innerText)));


function checkCalcInput(btn){
    if(Number(btn) == btn){
        isNumber(btn);
    } else if(btn === '×'|| btn === '÷'||
    btn === '+'|| btn === '-'){
        isOperator(btn);
    }else if(btn === '='){
        isEqual();
    }else if(btn === 'C'){
        clear();
    }else if(btn === '+/-'){
        changeSign()
    };
}

function clear(){
    num1 = 0;
    num2 = 0;
    operator = '';
    calcScreen.textContent = num2;
}

function changeSign(){
    if(num1 != 0 && num2 == 0){
        if(num1[0] == '-'){
            num1 = num1.slice(1);
            calcScreen.textContent = num1;
        } else {
            num1 = `-${num1}`;
            calcScreen.textContent = num1;
        };
    }else if(num1 == 0 && num2 != 0){
        if(num1[0] == '-'){
            num2 = num2.slice(1)
            calcScreen.textContent = num1;
        } else {
            num2 = `-${num2}`;
            calcScreen.textContent = num2;
        }
    };
};

function isEqual(){
    operate(operator,num2,num1);
    changeNum();
}

function isOperator(oper){
    if(num1 == 0 && num2 == 0){
        return
    }else if(operator === ''){
        operator = oper;
        changeNum()
    }else {
        isEqual();
        operator = oper;
        changeNum()
    }
};

function isNumber(num){
    if(num1 == 0) {
        num1 = `${num}`;
    } else {
    num1 += `${num}`;
    };
    calcScreen.textContent = num1;
};

function changeNum(){
    if(num1 == 0){

    } else {
        num2 = num1;
        num1 = 0;
    }
    calcScreen.textContent = num2;
}
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
    switch(oper){
        case '+':
            num1 = add(Number(a),Number(b));
            break;
        case '-':
            num1 = subtract(a,b);
            break;
        case '×':
            num1 = multiply(a,b);
            break;
        case '÷':
            num1 = divide(a,b);
            break;
        }
    return num1;
}