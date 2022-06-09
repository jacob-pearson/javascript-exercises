const add = function(a, b) {
  let sum = a + b
  return sum
	
};

const subtract = function(a, b) {
  let result = a - b
  return result
	
};

const sum = function(a) {
  let total = 0
  for(let i = 0; i < a.length; i++){
    total += a[i]
  }
  return total
	
};

const multiply = function(a) {
  let total = 1
  for(let i = 0; i < a.length; i++){
    total = total * a[i]
  }
  return total


};

const power = function(a, b) {
  let result = a ** b
  return result
};

const factorial = function(a) {
  let numbers = []
  let total = 1
  while(a > 0){
    numbers.push(a)
    a--
  }
  for(let i = 0; i < numbers.length; i++){
    total = total * numbers[i]
  }
  return total
	
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
