let number = document.getElementById("number");
let result = document.getElementById("result");
let factorCount = 0;
function checkPrime() {
  let num = parseInt(number.value);
  if (num >= 1 && num <= 1000000) {
    result.classList.remove("hide");
    if (isPrime(num)) {
      result.innerHTML = `<p>Result : The number ${num} is a Prime Number</p>`;
    } else {
      result.innerHTML = `<p>Result : The number ${num} is not a Prime Number</p>`;
    }
  } else {
    alert("Number must be in range (1 to 10,00,000)");
  }
  number.value = "";
}

function isPrime(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
      if (count > 2) {
        return false;
      }
    }
  }
  if (count === 2) {
    return true;
  }
}
