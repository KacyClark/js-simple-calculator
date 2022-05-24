let num1;
let num2;

function getNum(){

  num1 = parseInt(document.getElementById("firstNumber").value);
  num2 = parseInt(document.getElementById("secondNumber").value);
} 
function sum() {
  getNum();
  document.getElementById("results").innerHTML = `${num1} + ${num2} = ${num1 + num2}`;
}

//subtraction
function subtract() {
  getNum();
  document.getElementById("results").innerHTML = `${num1} - ${num2} = ${num1 - num2}`;
}

//multiplication
function multiplyBy() {
  getNum();
  document.getElementById("results").innerHTML = `${num1} x ${num2} = ${num1 * num2}`;
}


//division
function divideBy() {
  getNum();
  document.getElementById("results").innerHTML = `${num1} / ${num2} = ${num1 / num2}`;
}

