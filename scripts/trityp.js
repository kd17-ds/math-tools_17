let side1 = document.getElementById("side1");
let side2 = document.getElementById("side2");
let side3 = document.getElementById("side3");
let detect = document.getElementById("detect");
let s1, s2, s3;
function valueInput() {
  s1 = parseFloat(side1.value);
  s2 = parseFloat(side2.value);
  s3 = parseFloat(side3.value);
  checkvalid();
}
function checkvalid() {
  if ((s1, s2, s3 >= 1 && s1, s2, s3 <= 10000)) {
    if (s1 + s2 > s3 && s2 + s3 > s1 && s3 + s1 > s2) {
      detect.classList.remove("hide");
      if (s1 === s2 && s2 === s3) {
        detect.innerHTML = "<p>This is an Equilateral Triangle</P>";
      } else if (s1 === s2 || s2 === s3 || s3 === s1) {
        detect.innerHTML = "<p>This is an Isoceles Triangle</P>";
      } else {
        detect.innerHTML = "<p>This is an Scalene Triangle</P>";
      }
    } else {
      alert("Triangle is Not Valid");
    }
  } else {
    alert("Sides Should be in Range of 1 to 10,000");
  }
}
