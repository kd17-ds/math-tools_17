let pa = document.getElementById("pa");
let rate = document.getElementById("rate");
let time = document.getElementById("time");
let p, r, t;
let calculate = document.getElementById("calculate");
function calculatesi() {
  p = parseInt(pa.value);
  r = parseInt(rate.value);
  t = parseInt(time.value);
  si();
}
function si() {
  if (
    p >= 1 &&
    p <= 10000000 &&
    r >= 1 &&
    r <= 10000000 &&
    t >= 1 &&
    t <= 10000000
  ) {
    calculate.classList.remove("hide");
    let simpleInterest = (p * r * t) / 100;
    calculate.innerHTML = `Simple Interest: ${simpleInterest}`;
  } else {
    alert("Number must be in range (1 to 1,00,00,000)");
  }
}
