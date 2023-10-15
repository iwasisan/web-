// jqueryを使わずに要素の横幅をアラートに出して見よう！
// 問題1：要素の横幅を取得しよう

let elem = document.querySelector(".box");

elem.clientWidth;



document.addEventListener("click", function () {
  alert("横幅は" + elem.clientWidth + "です。");
});
// 見本だと、画像を表示した状態でアラートを出していた。
// イベント種類をloadにしたら・・動かず、DOMContentLoadedだとリロード後に
// 画像が表示されてない状態でアラートが表示

// やりたい事　：画像を表示させた状態でアラートをだしたい。
// 上記はサイトをクリックしたらアラートなので、条件は満たしているが・・・


// clientWidth と clientHeight 要素の高さを返すプロパティ　コンテンツの実際のサイズ

// elem.clientWidth; //310  elemの横幅
// パディングを含みますが、境界線、マージン、またはスクロールバーは含まれない。

//https://www.techiedelight.com/ja/get-width-and-height-of-element-javascript/