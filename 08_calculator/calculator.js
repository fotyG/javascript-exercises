const add = function(...args) {
	return args[0] + args[1]
};

const subtract = function (...args) {
  return args[0] - args[1]
};

const sum = function (nums) {
  return nums.reduce((accum, curr) => accum + curr, 0)
};

const multiply = function (nums) {
  return nums.reduce((accum, curr) => accum * curr)
};

const power = function (num, pow) {
  if (pow === 1) {
    return num;
  } 
  return num * power(num, pow - 1)
};

const factorial = function (num) {
  if(num === 0) {
    return 1
  }
  return num * factorial(num - 1)
};


console.log(factorial(10));
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
