const palindromes = function (str) {
  const newStr = str
    .toLowerCase()
    .split(/[^A-Za-z0-9]/g)
    .join("");
  
  const reverse = newStr.split("").reverse().join("");

  return newStr === reverse ? true : false;
};
palindromes("sosi hujz scuko!!!-__bljeat")
// Do not edit below this line
module.exports = palindromes;
