import { TypeCalcOperation } from "./entities/operation.entity.js";

let isFirstNumber = true;

function onLoad() {
  const prevData = document.getElementById('calculator__prev__data');
  const currentData = document.getElementById('calculator__current__data');

  // TODO: Get data from local storage and indexDB
  prevData.innerHTML = '';
  currentData.innerHTML = '0';
}

window.addEventListener('load', onLoad);

function onUpdateCurrentData(data, replace = false) {
  const currentData = document.getElementById('calculator__current__data');

  if (isFirstNumber) {
    currentData.innerHTML = data;
    isFirstNumber = false;
    return;
  }

  if (replace) {
    currentData.innerHTML = data;
    return;
  }

  currentData.innerHTML += data;
}

function checkIfLastCharIsOperator() {
  const currentData = document.getElementById('calculator__current__data');
  const cleanData = currentData.innerHTML.trim();
  const lastChar = cleanData[cleanData.length - 1];

  return lastChar === '+' || lastChar === '-' || lastChar === 'x' || lastChar === '÷';
}

function checkIfLastCharIsNumber() {
  const currentData = document.getElementById('calculator__current__data');
  const cleanData = currentData.innerHTML.trim();
  const lastChar = cleanData[cleanData.length - 1];

  return Number.isInteger(parseInt(lastChar));
}

function checkIfLastCharIsPoint() {
  const currentData = document.getElementById('calculator__current__data');
  const cleanData = currentData.innerHTML.trim();
  const lastChar = cleanData[cleanData.length - 1];

  return lastChar === '.';
}

function onButtonClick(event) {
  const typeOperation = event.target.dataset.operation;
  const data = event.target.innerHTML;

  if (typeOperation === TypeCalcOperation.equal) {
    // TODO: Save data in local storage and indexDB
    // TODO: Move all operation to prevData

    const prevData = document.getElementById('calculator__prev__data');
    const currentData = document.getElementById('calculator__current__data');

    if (checkIfLastCharIsOperator()) {
      return;
    }

    prevData.innerHTML = currentData.innerHTML;
    currentData.innerHTML = eval(convertToRigthFormatToEval(currentData.innerHTML));

    isFirstNumber = true;
    return;
  }

  if (typeOperation === TypeCalcOperation.number) {
    return onUpdateCurrentData(data);
  }

  const isBasicOperation = typeOperation === TypeCalcOperation.multiplication || typeOperation === TypeCalcOperation.division || typeOperation === TypeCalcOperation.addition || typeOperation === TypeCalcOperation.subtraction;

  if (isFirstNumber && isBasicOperation) {
    return;
  }

  if (isBasicOperation) {

    const currentData = document.getElementById('calculator__current__data');

    if (checkIfLastCharIsOperator()) {
      const cleanData = currentData.innerHTML.trim();
      const newData = cleanData.substring(0, cleanData.length - 1).trim();

      onUpdateCurrentData(`${newData} ${data} `, true);
      return;
    }

    return onUpdateCurrentData(` ${data} `);
  }

  if (typeOperation === TypeCalcOperation.point) {
    const currentData = document.getElementById('calculator__current__data');

    if (isFirstNumber) {
      onUpdateCurrentData('0.');
      return;
    }


    if (!checkIfLastCharIsNumber()) {
      return;
    }


    return onUpdateCurrentData(data);
  }

  onUpdateCurrentData(` ${data} `);
}

function convertToRigthFormatToEval(data) {
  return data.replace('x', '*').replace('÷', '/');
}

const buttons = document.querySelectorAll('.calculator__actions div button');
buttons.forEach(button => button.addEventListener('click', onButtonClick));