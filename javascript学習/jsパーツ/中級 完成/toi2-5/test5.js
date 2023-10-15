// 問題5：inputの値を取得して誕生日を祝おう
// 自分の誕生日なら「おめでとう！」と表示させよう。

const birth = document.getElementById("birthday");

birth.value;
// <input type="date" id="birthday"～　に対してelement.valueの形
// ボックスの値の取得をしてる。
// '1990-01-01'　ボックスを操作すると値も変わる。

  // let elem = birth.value;
  // 何かこうすると　elem　が固定値になる


const mybir = "1987-02-11";
// 注意　02　の所を　2　と書くと一致しなくなる。


// https://gxy-life.com/2PC/PC/PC20210811.html 【javascript】CSSを追加、削除、変更する方法

let day = document.querySelector('h1');

  // day.style.cssText = "display:block";
// cssText　複数のプロパティを変更したいときはこっち。表記はcssみたいにできる。

  // day.style.display = 'block';

// 上記どちらでもok,ただし" "内が空白の場合はdisplay: none;が残ってしまう。

birth.addEventListener("change", function () {
  if (birth.value == mybir) {
    day.style.display = "block";
  }
})
// こっちなら動いた。birthが変化したら。ifの処理、そこで誕生日かどうかを比較する形
// 多分これと、下の動かなかったものの違いは「トリガー」があるかないか
// 入力ミス等も考慮すると、複数回入力するかも（その時の数字の変化のたびに）
// コードが読まれる（判定される）とかではないか
// 「トリガー」は・・ユーザーの操作とみていいのかな


if (birth.value == mybir) {
  day.style.display = "block";
};
// if文の中に直接trueと書いたら動いたが、これだと比較した結果がtrueでも動かなかった。

// https://www.canit.jp/intro/javascript/javascript3-2.html
// https://www.javadrive.jp/javascript/form/index1.html
// https://www.sejuku.net/blog/20736



