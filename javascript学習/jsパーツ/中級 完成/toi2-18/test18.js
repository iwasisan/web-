// 問題18：フォーカスしたら文字を表示しよう
// inputタグにフォーカスしたら
// 値を .anser　に表示させよう

// focusイベントとは、ユーザーがテキストフィールドやテキストエリアなどに対してフォーカスした時
// (クリックやキーボードのTabキー)のタイミングで実行されるイベント、
// ff14のフォーカスターゲットみたいなもの
// https://web-engineer-wiki.com/javascript/focus-event/
// https://tcd-theme.com/2022/10/javascript-event-focus-blur.html

let inp = document.querySelector('input');
//  <input type="text"></input>

let ans = document.querySelector(".anser");
//    <div class="anser"></div>

// https://ryunosukeblog.tatu-hobby.com.tatu-hobby.com/2020/10/28/htmlcss-input-outline/
// 枠線の色を変える方法　➡️　『outline: solid 2px red;』で指定する。

// https://dev-lib.com/japascript-is-empty/ 空判定

inp.value;
// テキストエリアに文字が残っており、フォーカスが外れている時。文字を拾ってくれる。 文字列を返す（数字を入力しても）
// https://www.javadrive.jp/javascript/form/index2.html
// テキストエリアの値を取得 ~.value(~　がインプットの為テキストエリアの値)


inp.addEventListener("focus", function () {
  inp.style.outline = "solid 2px blue";
  if (inp.value) {
    ans.textContent = inp.value;
  }
});

// "focus"テキストフォームをクリックした時がスタートトリガー
// まずフォーカス時に枠のアウトラインを表示、その際、枠の中が空かどうかを判定、
// なにか入力があれば、ans.innerHTMLでdiv要素に入力した「文字列」を代入
// すると、div要素の中に文字が入り表示となる。
// ans.textContentでも　innerHTMLでもオッケー
// https://beginners-hp.com/javascript/text_add.html

inp.addEventListener("blur", function () {
  inp.style.outline = "";
})

// "blur"テキストフォームの外をクリックしターゲットを外した時
// フォーカスターゲットを外した際、枠のアウトラインをもとに戻す。
