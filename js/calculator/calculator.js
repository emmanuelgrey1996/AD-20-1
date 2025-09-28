const add = function(a, b) {
    return a + b;
}
const subtract = function(a, b) {
  return a - b;
}

function divide(a, b){
  return a / b;
}

function multiply(a, b){
  return a * b;
}

// When you want to use the divide or multiple function, remember to add it to the export here
module.exports = {add: add, subtract: subtract};

const divide = (a, b) => {
  if (b === 0) return "No se puede dividir entre 0"; 
  return a / b;
};
module.exports = {
  add,
  substract,
  multiply,
  divide,
};