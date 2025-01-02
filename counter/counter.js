const counterElement = document.getElementById('counter-placeholder');
let counter = parseInt(counterElement.innerText); //string -> int.

const decrease = function () {
  console.log('decrease');
  counter = counter - 1;
  counterElement.innerText = counter;
}

const reset = function () {
  console.log('reset');
  counter = 0;
  counterElement.innerText = counter;
}

const increase = function () {
  console.log('increase');
  counter = counter + 1;
  counterElement.innerText = counter;
}