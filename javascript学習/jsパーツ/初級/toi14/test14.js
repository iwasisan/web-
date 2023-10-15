// 問題14：jsで文字を表示させよう
// クリックしたら文字を出現させましょう！

const trig = document.querySelector(".trigger");
// <div class="trigger" style="margin-bottom: 30px;">クリックしてください</div>

const tage = document.querySelector(".target");


// tage.style.display = ""; このコードで消えてた文字が表れた。
// スタイルシートでの要素の非表示をJavaScriptで制御　消したい時はnone
// ※この方法が触れるのは、タグにstyle属性で直接かかれたもののみ
// https://pentan.info/javascript/sample/view_hidden.html
// https://magazine.techacademy.jp/magazine/33333

// 実際に表示出来た。これをイベントリスナー（クリック時）にしたらいいんじゃないか
// onclickでも行けるかも。

trig.onclick = function () {
  tage.style.display = "";
}

// クリックしてください。の範囲をクリックしたとき｛｝内の動きをする。
// 動き：targetクラスのhtml要素のスタイル（display)からnoneを消す。
// display:noneが消えたら表示になる。

// 懸念点：もしスタイルが複数ついていたらどうするんだろう。変えたい項目数だけ行が増えるとか？