const removeFromArray = function(arr, ...args) {
  
  return arr.filter((item) => !args.includes(item))
  
};


removeFromArray([1,2,3,4,5,6,7,8,9], 5)
// Do not edit below this line
module.exports = removeFromArray;
