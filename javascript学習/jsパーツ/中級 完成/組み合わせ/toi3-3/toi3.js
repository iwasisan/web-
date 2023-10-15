//初級 [4],[8],[10]の組み合わせ

const topuro1 = document.querySelector(".img1");
    // <p class="img1">…</p>

const topuro2 = document.querySelector(".im2");
    // <p class="img2">…</p>

let maintext = document.querySelector(".main");
    // <p class="main">ウマ娘！プリティーダービー</p>

let subtext = document.querySelector(".sub");
    // <p class="sub">Road to The Top</p>




maintext.addEventListener("click", function () {
  subtext.classList.add("main");
  subtext.animate([{ opacity: "0" }, { opacity: "1" }], 1500);
})
// [16]フェードイン　[8]クラスを追加




topuro1.addEventListener("click", function () {
  topuro1.style.display = "none"
  topuro2.classList.toggle("img2");
})

topuro2.addEventListener("click", function () {
  topuro2.classList.toggle("img2");
  topuro1.style.display = "";
})

// うーん。組み合わせ・・・なのかな。どうも単発でつかってるような