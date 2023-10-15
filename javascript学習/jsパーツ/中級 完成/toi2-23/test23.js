// 問題23：要素内の最後に要素を挿入しよう
// .addをclickしたら
// .valの最後にinputの値を追加しよう。

let inp = document.querySelector("input");
// <input type="text"></input>

let result = document.querySelector(".val");
// <div class="val"></div>

const btn = document.querySelector(".add");
// <div class="add">追加する</div>

//  inp.value; テキストボックスの文字 文字列


btn.addEventListener("click", function () {
  if (inp.value) {
    result.insertAdjacentHTML("beforeend", inp.value);
  }
})

// https://magazine.techacademy.jp/magazine/33975#ta-toc-2

// insertAdjacentHTMLメソッド HTML要素を追加する

// 上記は「追加する」のクリックをトリガーにし、テキストボックスの文字が入力されているか
// 判定、判定されていたら、resultにその文字を追加していく仕組み

// ans.textContent = inp.value; フォーカスしよう　の問題で使ったこれでは
// 追加　の形にならない。　カッコ内の文字を表示はできるが。なお削除を反映したい時は
// 空白を用いる必要がある。


// result <div class="val"></div>にコンソールでみると
// <div class="val">
// "ddd"
// "www"
// </div>
// みたいに追加され、表示は普通に末尾に追加されている