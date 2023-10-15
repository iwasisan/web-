// [8]と[22]

// 参考を見ながら、行い、上手く行かな買ったので個別にしたら
// 上手く行った。

// ウィンドウをスクロールしたときにスクロールした高さと
// コンテンツの上辺からウィンドウの上辺までの距離が同じくらいに
// なったらアニメーションを設定してるクラスを付与して
// アニメーションさせる。

const text1 = document.querySelector(".text1");

const text2 = document.querySelector(".text2");

const gra2 = document.querySelector(".gool");


window.addEventListener("scroll", function () {
  const text2top = text2.getBoundingClientRect().top;
  const windowheight = window.innerHeight;

  if (text2top - windowheight <= 0) {
    text2.classList.add("animated");
  }
})


window.addEventListener("scroll", function () {
  const text1top = text1.getBoundingClientRect().top;
  const windowheight = window.innerHeight;

  if (text1top - windowheight <= 0) {
    text1.classList.add("animated2");
  }
});


window.addEventListener("scroll", function () {
  const gra2top = gra2.getBoundingClientRect().top;
  const windowheight = window.innerHeight;

  if (gra2top - windowheight <= 0) {
    gra2.classList.add("animated");
  }
});