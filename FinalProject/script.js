//Author: Rebecca Cathey

const numInput = document.getElementById('num');
const additionPara = document.getElementById('addition');
const subtractionPara = document.getElementById('subtraction');
const multiplicationPara = document.getElementById('multiplication');
const divisionPara = document.getElementById('division');
const calculateBtn = document.getElementById('calculateBtn');

function addNumbers() {
    let num = parseFloat(numInput.value);
    additionPara.innerHTML = ""; // Clear previous results
    for (let i = 1; i <= 10; i++) {
        let p = document.createElement('p');
        p.textContent = `${num} + ${i} = ${num + i}`;
        additionPara.appendChild(p);
    }
}

function subtractNumbers() {
    let num = parseFloat(numInput.value);
    subtractionPara.innerHTML = ""; // Clear previous results
    for (let i = 1; i <= 10; i++) {
        let p = document.createElement('p');
        p.textContent = `${num} - ${i} = ${num - i}`;
        subtractionPara.appendChild(p);
    }
}

function multiplyNumbers() {
    let num = parseFloat(numInput.value);
    multiplicationPara.innerHTML = ""; // Clear previous results
    for (let i = 1; i <= 10; i++) {
        let p = document.createElement('p');
        p.textContent = `${num} * ${i} = ${num * i}`;
        multiplicationPara.appendChild(p);
    }
}

function divideNumbers() {
    let num = parseFloat(numInput.value);
    divisionPara.innerHTML = ""; // Clear previous results
    for (let i = 1; i <= 10; i++) {
        let divisionResult = (num / i).toFixed(2); // Limit division to two decimal places
        let p = document.createElement('p');
        p.textContent = `${num} / ${i} = ${divisionResult}`;
        divisionPara.appendChild(p);
    }
}

function calculate() {
    if (numInput.value) {
        addNumbers();
        subtractNumbers();
        multiplyNumbers();
        divideNumbers();
    } else {
        alert("Please enter a number.");
    }
}

calculateBtn.addEventListener('click', calculate);
