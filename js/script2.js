// ? ini javascript 2

let s1 = document.getElementById("s1");
let s2 = document.getElementById("s2");
let s3 = document.getElementById("s3");

let hitung = document.getElementById("hitung");
let output = document.getElementById("output");
let output2 = document.getElementById("output2");
let output3 = document.getElementById("output3");

hitung.addEventListener("click", function () {
  let o = parseFloat(s1.value);
  let b = parseFloat(s2.value);
  let c = parseFloat(s3.value);
  let n = o + b + c;

  output.innerHTML = `K = S1 + S2 + S3`;
  output2.innerHTML = `K = ${o} + ${b} + ${c}`;
  output3.innerHTML = `K = ${n} `;
});

// ? Reset
let reset = document.getElementById("reset");
reset.addEventListener("click", function () {
  location.reload();
});
