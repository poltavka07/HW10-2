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
  let a = visualViewport.height - w;
  let b = visualViewport.width - w;
  let rndPoz = "style = 'top:" + random(a) + "px; left:" + random(b) + "px;";
  return rndPoz;
}
//функція для додавання input з діаметром кіл
function showInp() {
  btn.insertAdjacentHTML(
    "afterend",
    "<input type='text' label='диаметр круга' value = '10'></>"
  );
  btn.addEventListener("click", drawKolo);
}
//функція для створення 100 кіл
function drawKolo() {
  for (let i = 0; i < 100; i++) {
    body.insertAdjacentHTML(
      "beforeend",
      `<div class = 'booble' ${razbros(
        document.querySelector("input").value
      )} background-color:${rainbow()};  width: ${
        document.querySelector("input").value
      }px;
      height: ${document.querySelector("input").value}px;'></div>`
    );
  }
}

btn.addEventListener("click", showInp, { once: true });
body.addEventListener("click", (e) => {
  if (e.target.tagName === "DIV") e.target.remove();
});
