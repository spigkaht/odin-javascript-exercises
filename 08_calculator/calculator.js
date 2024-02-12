const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const multiply = function(...args) {
  let total = args[0][0];
	for (let i = 1; i < args[0].length; i++) {
    total *= args[0][i];
  }
  return total;
};

const power = function(num, power) {
  let total = num;
  for (let i = 0; i < power - 1; i++) {
    total *= num;
  }
  return total;
};

const factorial = function(num) {
	let total = 1;
  for (let i = num; i > 0; i--) {
    total = total * i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
