"use strict";

const btn = document.querySelector("button");
const body = document.querySelector("body");

//функція для рендому
function random(number) {
  return Math.floor(Math.random() * (number + 1));
}
//функція для додавання стиля background з кольором
function rainbow() {
  const rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  return rndCol;
}
//функція для додавання стиля з координатами top left
function razbros(w) {
  let rndPoz =
    "top:" + random(w * 10 - w) + "px; left:" + random(w * 10 - w) + "px;";
  return rndPoz;
}

//функція для реалізації "впорядкування" кіл додаванням стилю position
function poriadok(bob) {
  let rez = confirm(
    "Малювати хаотично?\nЯкщо так - Ok\nЯкщо рядочками - Cancel"
  );
  if (rez) {
    for (const item of bob) {
      item.style.position = "absolute";
    }
  }
}

//функція для додавання input з діаметром кіл
function showInp() {
  btn.insertAdjacentHTML(
    "afterend",
    "<span style=' position: absolute; z-index:2; top:50%; left:50%; margin-top:-70px; margin-left: -100px;'>Діаметр кола</span><input type='text' value ='10'></>"
  );
  btn.addEventListener("click", drawKolo);
}
//функція для створення 100 кіл
function drawKolo() {
  let diametr = document.querySelector("input").value;
  if (diametr * 10 > visualViewport.width)
    alert("Дуже великий діаметр, намалюється не гарно!");

  body.insertAdjacentHTML(
    "beforeend",
    `<div class='container' style=' position: relative; width:${diametr * 10}px;
 height: ${diametr * 10}px;
 background-color: yellow;'></div>`
  );
  const container = document.body.lastChild;
  for (let i = 0; i < 100; i++) {
    container.insertAdjacentHTML(
      "beforeend",
      `<div class = 'booble' style = ' ${razbros(
        diametr
      )} background-color:${rainbow()};  width: ${diametr}px;
      height: ${diametr}px;'></div>`
    );
  }
  poriadok(container.querySelectorAll(".booble"));
}

btn.addEventListener("click", showInp, { once: true });
body.addEventListener("click", (e) => {
  if (e.target.tagName === "DIV" && e.target.className !== "container")
    e.target.remove();
});
