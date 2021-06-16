let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');
inputWindow.value = '0';

// 0 - 9 buttons
let buttons = document.querySelectorAll('.num-pan');

buttons.forEach((elem) => {
    elem.addEventListener('click', () => {
        if (inputWindow.value === '0') {inputWindow.value = ''};
        inputWindow.value += elem.innerHTML;
    });
});

// 'clear' button
document.getElementById('btn_clr').addEventListener('click', () => {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '0';
});

// math operations buttons
document.getElementById('btn_plus').addEventListener('click', () => {
    lastOperand = Number(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '';
});

document.getElementById('btn_minus').addEventListener('click', () => {
    lastOperand = Number(inputWindow.value);
    operation = 'dif';
    inputWindow.value = '';
});

document.getElementById('btn_multiply').addEventListener('click', () => {
    lastOperand = Number(inputWindow.value);
    operation = 'mult';
    inputWindow.value = '';
});

document.getElementById('btn_divide').addEventListener('click', () => {
    lastOperand = Number(inputWindow.value);
    operation = 'div';
    inputWindow.value = '';
});

document.getElementById('btn_sqRoot').addEventListener('click', () => {
    lastOperand = Number(inputWindow.value);
    operation = 'sqrt';
    inputWindow.value = '';
});

document.getElementById('btn_power').addEventListener('click', () => { 
    lastOperand = Number(inputWindow.value);
    operation = 'pow';
    inputWindow.value = '';
});

document.getElementById('btn_real').addEventListener('click', () => {
    inputWindow.value = inputWindow.value +  '.';
});

document.getElementById('btn_unary').addEventListener('click', () => { 
    inputWindow.value = (-inputWindow.value);
});

// '=' button
document.getElementById('btn_equal').addEventListener('click', () => {
    if (operation === 'sum') {
        const result = Number(lastOperand) + Number(inputWindow.value);
            operationsBefore.value += `${lastOperand} + ${inputWindow.value} = ${result} \n`;
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;        
    }
    if (operation === 'dif') {
        const approx = 10
        const result = ((Number(lastOperand) * approx) - (Number(inputWindow.value) * approx)) / approx;
            operationsBefore.value += `${lastOperand} - ${inputWindow.value} = ${result} \n`;
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;        
    }
    if (operation === 'mult') {
        const result = Number(lastOperand) * Number(inputWindow.value);
            operationsBefore.value += `${lastOperand} * ${inputWindow.value} = ${result} \n`;
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;        
    }
    if (operation === 'div') {
        const result = Number(lastOperand) / Number(inputWindow.value);
            operationsBefore.value += `${lastOperand} / ${inputWindow.value} = ${result} \n`;
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;        
    }
    if (operation === 'sqrt') {
        const result = Math.sqrt(lastOperand);
            operationsBefore.value += `√${lastOperand} = ${result} \n`;
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;        
    }
    if (operation === 'pow') {
        const result = Math.pow(lastOperand, 2);
            operationsBefore.value += `${lastOperand}^2 = ${result} \n`;
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;        
    }
});
