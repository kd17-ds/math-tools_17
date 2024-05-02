let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let operator = document.getElementById("operator");
let result = document.getElementById("result");
let number1, number2;

function operate() {
  result.innerHTML = `<p>${calculate(operator.value)}</p>`;
}

function calculate(operator) {
  number1 = parseFloat(num1.value);
  number2 = parseFloat(num2.value);
  if (
    number1 >= -10000000 &&
    number1 <= 10000000 &&
    number2 >= -10000000 &&
    number2 <= 10000000
  ) {
    result.classList.remove("hide");
    if (operator === "+") {
      return number1 + number2;
    } else if (operator === "-") {
      return number1 - number2;
    } else if (operator === "*") {
      return number1 * number2;
    } else if (operator === "/") {
      if (number2 !== 0) {
        return number1 / number2;
      } else {
        return "Cannot divide by zero.";
      }
    } else {
      return "Invalid operator";
    }
  } else {
    alert("Number must be in range (-1,00,00,000 to 1,00,00,000)");
  }
}
