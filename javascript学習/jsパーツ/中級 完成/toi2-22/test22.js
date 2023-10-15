// 問題22：「scrollしたら」を設定しよう
// 画面をscrollしたらscroll位置を、
// .scroll-valに表示使用しよう

let counter = document.querySelector(".scroll-val"); 
// <div class="scroll-val">0</div>

// counter = window.scrollY;
// これだとwindow.scrollY;はコンソールでは数値がスクロールにあわせて変わるけど
// counterは0 のまま

// https://gray-code.com/javascript/execute-processing-when-scroll/

window.addEventListener("scroll", function () {
  counter.textContent = window.scrollY;
})

// ウインドウ画面をスクロールしたときに、縦軸のスクロール位置を
//textContentで文字列としてcounterに代入。画面に文字として表示・・かな。

