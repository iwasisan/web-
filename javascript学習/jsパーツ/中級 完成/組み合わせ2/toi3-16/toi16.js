//イメージとしては
// https://design-remarks.com/image-after-color/

// スクロール時、コンテンツがある程度近づいたら表示する。
// ふわっと表示されるｊｓ　の　表示の仕方が変わったバージョンだったこと
// 作ってから気付きました。


const maskanime = document.querySelector(".mask");

window.addEventListener("scroll", function () {
  const maskanimetop = maskanime.getBoundingClientRect().top;
  const windowheight = this.window.innerHeight;

  if (maskanimetop - windowheight <= 0) {
    maskanime.classList.add("anim");
  }
})