// ? ini javascript

let alas = document.getElementById("alas");
let tinggi = document.getElementById("tinggi");
let hitung = document.getElementById("hitung");
let output = document.getElementById("output");
let output2 = document.getElementById("output2");
let output3 = document.getElementById("output3");

hitung.addEventListener("click", function () {
  let a = alas.value;
  let t = tinggi.value;
  let l = 0.5 * a * t;

  output.innerHTML = `L = 1/2 x a x t`;
  output2.innerHTML = `L = 1/2 x ${a} x ${t}`;
  output3.innerHTML = `L = ${l}`;
});

// button restart
let reset = document.getElementById("reset");
reset.addEventListener("click", function () {
  location.reload();
});
