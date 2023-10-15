//一回しか押せないボタン

const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  this.innerHTML = "クリックくん";
  this.setAttribute("disabled", true);
})