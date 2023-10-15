
const btn = document.querySelector("#btn");

const pic = document.querySelector(".picture");

const rero = document.querySelector("#reload");


btn.addEventListener("click", function () {
  pic.classList.add("is-active");
})

rero.addEventListener("click", function () {
  pic.classList.remove("is-active");
})