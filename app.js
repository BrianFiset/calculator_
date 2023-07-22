const calc = document.querySelectorAll('.line > div');
const calcScreenNum1 = document.querySelector('.calc-screen .number1');
const calcScreenNum2 = document.querySelector('.calc-screen .number2');
const calcScreenOper = document.querySelector('.calc-screen .operator');
let num1 = 0;
let num2 = 0;
let operator = '';

calc.forEach(number => number.addEventListener('click',(e) => checkCalcInput(e.target.innerText)));


function checkCalcInput(btn){
    if(Number(btn) == btn){
        isNumber(btn);
    }else if(btn === '×'|| btn === '÷'||
    btn === '+'|| btn === '-'){
        isOperator(btn);
    }else if(btn === '='){
        isEqual();
    }else if(btn === 'C'){
        clear();
    }else if(btn === '+/-'){
        changeSign();
    }else if(btn === '←'){
        deleteLast();
    }else if(btn === '.'){
        isDot()
    };
}

function clear(){
    num1 = 0;
    num2 = 0;
    operator = '';
    calcScreenNum1.textContent = '';
    calcScreenOper.textContent = '';
    calcScreenNum2.textContent = '0';
}

function changeSign(){
    if(num1 != 0 && num2 == 0){
        if(num1[0] == '-'){
            num1 = num1.slice(1);
            calcScreenNum2.textContent = num1;
        } else {
            num1 = `-${num1}`;
            calcScreenNum2.textContent = num1;
        };
    }else if(num1 == 0 && num2 != 0){
        if(num2[0] == '-'){
            num2 = num2.slice(1)
            calcScreenNum2.textContent = num2;
        } else {
            num2 = `-${num2}`;
            calcScreenNum2.textContent = num2;
        }
    };
};

function isEqual(){
    let a = roundNumber(num1);
    let b = roundNumber(num2);
    operate(operator,num2,num1);
    changeNum();
    num2 = roundNumber(num2);
    if(a == 0 || b == 0){
        calcScreenNum1.textContent = `${num2}`;
    } else{
        calcScreenOper.textContent = '';
        calcScreenNum2.textContent = ``;
        calcScreenNum1.textContent = `${b} ${operator} ${a} = ${num2}`;
    };
};

function isOperator(oper){
    if(num1 == 0 && num2 == 0){
        return;
    }else if(operator === ''){
        operator = oper;
        changeNum();
    }else {
        isEqual();
        operator = oper;
        changeNum();
    };
    changeOper();
};

function isDot(){
    if(String(num1).includes('.')) return
    num1 += '.';
    calcScreenNum2.textContent = num1;
}

function isNumber(num){
    if(num1 === 0) {
        num1 = `${num}`;
    } else {
    num1 += `${num}`;
    };
    calcScreenNum2.textContent = num1;
};

function roundNumber(num){
    num = Math.round(num * 100) / 100
    return num
}

function changeOper() {
    calcScreenOper.textContent = operator;
};

function deleteLast(){
    if(calcScreenNum2.textContent === '') return
    num1 = num1.slice(0,-1);
    calcScreenNum2.textContent = num1;
};

function changeNum(){
    if(num1 == 0){

    } else {
        num2 = num1;
        num1 = 0;
    }
    let a = roundNumber(num2)
    calcScreenNum1.textContent = a;
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