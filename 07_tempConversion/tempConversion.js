const convertToCelsius = function(f) {
  const result = (f - 32) * (5 / 9);
  if (result % parseInt(result) !== 0) {
    return parseFloat(result.toFixed(1))
  }
  return result
};

const convertToFahrenheit = function(c) {
  const result = c * (9 / 5) + 32;
  if (result % parseInt(result) !== 0) {
    return parseFloat(result.toFixed(1));
  }
  return result;
};

console.log()
console.log(convertToCelsius(43));
console.log(convertToFahrenheit(73.2));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
