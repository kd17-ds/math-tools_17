let number = document.getElementById("number");
let result = document.getElementById("result");
let factors = [];
function calculateFactors() {
  // parseInt convert string to interger type
  let num = parseInt(number.value);

  if (num >= 1 && num <= 10000) {
    factors.length = 0;
    for (let i = 0; i <= num; i++) {
      if (num % i === 0) {
        factors.push(i);
      }
    }
    console.log(factors);
  } else {
    alert("Number must be in range (1 to 10,000)");
  }
  display();
}

function display() {
  result.innerHTML = "";
  for (let i = 0; i < factors.length; i++) {
    result.innerHTML += `<div class="factor">${factors[i]}</div>`;
  }
}
