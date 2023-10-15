// クラスの付けはずし
// クラスの削除

// 見え方、変化前、変化後はｃｓｓで見た目作る



window.onload = function () {
  let nav = document.getElementById("nav-wrapper");
  let hamburger = document.getElementById("js-hamburger");
  let blackBg = document.getElementById("js-black-bg");

  hamburger.addEventListener("click", function () {
    nav.classList.toggle("open");
  });
  blackBg.addEventListener("click", function () {
    nav.classList.remove("open");
  });
};
