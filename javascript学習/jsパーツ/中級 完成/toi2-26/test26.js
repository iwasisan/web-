// 問題26：リサイズされたら横幅を取得しよう
// 画面がリサイズされるごとに
// .valに横幅を表示しよう

let result = document.querySelector(".val");
//  <div class="val">0</div>

// resizeイベント ウィンドウサイズが変更されたとき
// https://www.javadrive.jp/javascript/event/index23.html
// https://tech-blog.tomono.jp/archives/964

window.addEventListener("resize", function () {
  result.textContent = window.innerWidth;
})


// ウィンドウサイズが変更（リサイズ）したのをトリガーにして
// window.innerWidth　ウィンドウの横幅を　result.textContent
// div要素に文字として差し込む　画面上サイトの伸び縮みにあわせて
// 0の数字が変わる。表示されている数字はウィンドウの横幅