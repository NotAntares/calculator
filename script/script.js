let fstInput = '';
let scdInput = '';
let operator = '';
let scdOperator = '';
let total = '';


const display = document.querySelector('.display');
let displayValue = display.textContent;

// Button-Events

const btnClear = document.querySelector('.clear')
btnClear.addEventListener('click', ()=> clearDisplay());

// number-buttons

const btnOne = document.querySelector('.one');
btnOne.addEventListener('click', ()=> updateDisplay('1'));

const btnTwo = document.querySelector('.two');
btnTwo.addEventListener('click', ()=> updateDisplay('2'));

const btnThree = document.querySelector('.three');
btnThree.addEventListener('click', ()=> updateDisplay('3'));

const btnFour = document.querySelector('.four');
btnFour.addEventListener('click', ()=> updateDisplay('4'));

const btnFive = document.querySelector('.five');
btnFive.addEventListener('click', ()=> updateDisplay('5'));

const btnSix = document.querySelector('.six');
btnSix.addEventListener('click', ()=> updateDisplay('6'));

const btnSeven = document.querySelector('.seven');
btnSeven.addEventListener('click', ()=> updateDisplay('7'));

const btnEight = document.querySelector('.eight');
btnEight.addEventListener('click', ()=> updateDisplay('8'));

const btnNine = document.querySelector('.nine');
btnNine.addEventListener('click', ()=> updateDisplay('9'));

const btnZero = document.querySelector('.zero');
btnZero.addEventListener('click', ()=> updateDisplay('0'));

const btnPoint = document.querySelector('.point');
btnPoint.addEventListener('click', ()=> {
    
    updateDisplay('.');
    btnPoint.disabled = true;
});

// operator-buttons

const btnAdd = document.querySelector('.add');
btnAdd.addEventListener('click', ()=>{
    if(operator !== ''){
        operate(fstInput, operator, scdInput);
    } 
    operator = '+';
    btnPoint.disabled = false;
    updateDisplay('+');
    
});

const btnSubtract = document.querySelector('.subtract');
btnSubtract.addEventListener('click', ()=>{
    if(operator !== ''){
        operate(fstInput, operator, scdInput);
    } 
    
    operator = '-';
    btnPoint.disabled = false;
    updateDisplay('-');
});

const btnMultiply = document.querySelector('.multiply');
btnMultiply.addEventListener('click', ()=>{
    if(operator !== ''){
        operate(fstInput, operator, scdInput);
    } 
   
    operator = '*';
    btnPoint.disabled = false;
    updateDisplay('*');
});

const btnDivide = document.querySelector('.divide');
btnDivide.addEventListener('click', ()=>{
    if(operator !== ''){
        operate(fstInput, operator, scdInput);
    } 
    
    operator = '/';
    btnPoint.disabled = false;
    updateDisplay('/');
});

const btnEquals = document.querySelector('.equals');
btnEquals.addEventListener('click', ()=>
    operate(fstInput, operator, scdInput)
);


// Display functions


function clearDisplay(){
    display.textContent = '';
    displayValue = display.textContent;
    btnPoint.disabled = false;

    operator = '';
    fstInput = '';
    scdInput = '';
}

function updateDisplay(x){
    display.textContent += x; 
    displayValue = display.textContent;
    if(operator === ''){
        fstInput += x;
    }else if(operator !== x){
        scdInput += x;
    };
}



// All Math-Functions

function add(a,b){
    fstInput = +(a+b).toFixed(2);
    scdInput = '';
    return display.textContent = fstInput;
}

function subtract(a,b){
    fstInput = +(a-b).toFixed(2);
    scdInput = '';
    return display.textContent = fstInput;
}

function multiply(a,b){
    fstInput = +(a*b).toFixed(2);
    scdInput = '';
    return display.textContent = fstInput;
}

function divide(a,b){

    fstInput= +(a/b).toFixed(2);
    scdInput = '';
    return display.textContent = fstInput;
}

// Operate function

function operate(fstInput, operator, scdInput){
    fstInput = Number(fstInput);
    scdInput = Number(scdInput);

    switch (operator){
        case '+':
            add(fstInput,scdInput);
            break;
        case '-':
            subtract(fstInput,scdInput);
            break;
        case '*':
            multiply(fstInput,scdInput);
            break;
        case '/':
            divide(fstInput,scdInput);
            break;
    }

}
