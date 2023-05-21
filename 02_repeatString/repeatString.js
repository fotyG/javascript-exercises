const repeatString = function(str, num) {
  let string = str;
  if (num === 0) return ""
  if (num < 0) return "ERROR"
  
  for (let i = 1; i < num; i++) {
    string += str;
  }
  return string;
};


repeatString("chlen", 5)
// Do not edit below this line
module.exports = repeatString;
