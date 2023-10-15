// クリックすると、画像がアニメーションを始める。
// サイトに一つくらいあったら、印象的かも

const puti1 = document.querySelector(".kyara1");

const puti2 = document.querySelector(".kyara2");

const puti3 = document.querySelector(".kyara3");

const puti4 = document.querySelector(".kyara4");


puti1.addEventListener("click", function () {
  if (puti1.classList.contains("anime")) {
    puti1.classList.remove("anime");
  } else {
    puti1.classList.add("anime");
  }
})

puti2.addEventListener("click", function () {
  if (puti2.classList.contains("anime")) {
    puti2.classList.remove("anime");
  } else {
    puti2.classList.add("anime");
  }
});

puti3.addEventListener("click", function () {
  if (puti3.classList.contains("anime")) {
    puti3.classList.remove("anime");
  } else {
    puti3.classList.add("anime");
  }
});

puti4.addEventListener("click", function () {
  if (puti4.classList.contains("anime")) {
    puti4.classList.remove("anime");
  } else {
    puti4.classList.add("anime");
  }
});




