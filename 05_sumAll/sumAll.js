const sumAll = function(min, max) {
  let sum = 0;
  if (typeof min !== "number" || min < 0 || typeof max !== "number" || max < 0) {
    return "ERROR";
  }
  if (min > max) {
    for (let i = max; i <= min; i++) {
      sum += i;
    }
    return sum;
  }
  if (min < max) {
    for (let i = min; i <= max; i++) {
      sum += i
    }
    return sum
  }
  return sum
};

console.log(sumAll(1, 5))
// Do not edit below this line
module.exports = sumAll;
