const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let sum = 0;
  array.forEach(number => {
    sum += number
  });
  return sum;
};

const multiply = function(array) {
return array.reduce((a,b) => a * b, 1)
};

const power = function(num1, num2) {
	return num1 ** num2
};

const factorial = function(num) {
	let result = 1; 
  for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result
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
