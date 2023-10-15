// 問題27：keyがupしたら値を取得しよう
// inputに値を入力して、
// キーをUPした時に .valに値を表示しよう。

let inp = document.querySelector("input");

let result = document.querySelector(".val");


inp.addEventListener("keyup", function () {
  result.textContent = inp.value;
})
// キーボードのキーを押して離した瞬間（キーアップ）時に
// 入力したテキストボックスに入っている値が都度代入される。
// 画面上は一文字ずつ増えているが、その実、1文字、2文字、3文字・・と
// テキストボックスに入ってるの文字がキーアップの際に代入されている・・・という動きだと思う。


inp.addEventListener("focus", function () {
  inp.style.outline = "solid 2px #4169e1 ";
})
// フォーカス時（選択時？）枠の色を付ける


inp.addEventListener("blur", function () {
  inp.style.outline = "";
})
// ブラー時？選択を外した際に枠の色を外す。


// https://magazine.techacademy.jp/magazine/30061
// 