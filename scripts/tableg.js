let number = document.getElementById("number");
let result = document.getElementById("result");
function generatetable() {
  let table = parseInt(number.value);
  number.value = "";
  if (table >= 1 && table <= 100000) {
    result.classList.remove("hide");
    result.innerHTML = "";
    result.innerHTML = `<p class="heading">Here is the table of ${table} :</p>`;
    for (let i = 1; i <= 10; i++) {
      let output = table * i;
      result.innerHTML += `<div class="manage">
<div>${table}</div>
<div><span>X</span></div>
<div>${i}</div>
<div><span>=</span></div>
<div>${output}</div>
</div>`;
    }
  } else {
    alert("Number must be in range (1 to 1,00,000)");
  }
}
