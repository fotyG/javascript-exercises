const fibonacci = function(number) {
  if (number < 0) return "OOPS";
  const fibArr = [1, 1 ];
  for (let i = 1; i < number - 1; i++ ) {
    let num = fibArr[i] + fibArr[i-1];
    fibArr.push(num);
  }
  // console.log(fibArr)
 return fibArr[number-1]
  
};

fibonacci(9)
// Do not edit below this line
module.exports = fibonacci;
