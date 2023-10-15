// ふわっとスクロールさせたい。

const topdown = document.querySelector(".btnn");

const botmup = document.querySelector(".btnn2");


topdown.addEventListener("click", function () {
  botmup.scrollIntoView({
    behavior:"smooth",
  });
})

botmup.addEventListener("click", function () {
  topdown.scrollIntoView({
    behavior:"smooth",
  })
})