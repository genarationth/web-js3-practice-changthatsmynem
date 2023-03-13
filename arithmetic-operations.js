//Addition Operation - declaration function
function addOperands(a, b) {
  return a + b;
}

console.log(addOperands(3, 9));

//Subtraction Operation - expression function
const subtract = function (a, b) {
  return a - b;
};

console.log(subtract(28, 1));

//Multiplication Operation - arrow function
const multiply = (a, b) => {
  return a * b;
};

console.log(multiply(125, 225));

//Division Operation - arrow function
const divide = (a, b) => {
  return a / b;
};

console.log(divide(236, 46));

//Every Operations in Short-Handed Arrow Form
const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;

console.log(division(40, 5));
