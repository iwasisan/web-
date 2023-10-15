// スクロール中ナビを透明にする。スクロールが終えたら映る。
// 一番下に行くスクロールしていくボタンと組み合わせ可能

const header = document.querySelector("ul");

const topdown = document.querySelector(".btnn");
const botmup = document.querySelector(".btnn2");

document.onscroll = (Event) => {
  header.classList.add("tes");
  header.classList.remove("tes2");
}

document.onscrollend = (Event) => {
  header.classList.add("tes2");
  header.classList.remove("tes");
}

topdown.addEventListener("click", function () {
  botmup.scrollIntoView({
    behavior: "smooth",
  });
});

botmup.addEventListener("click", function () {
  topdown.scrollIntoView({
    behavior: "smooth",
  });
});