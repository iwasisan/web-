// 問題4：クラス名を取得しよう
// クリックしたタグのクラス名を取得・・・現在cssでカーソルの表示だけ変わっているがボタンとかではない。

// クリック先から情報の取得が必要と考える。

// 参考https://qiita.com/gishitomi/items/269f6884625bfff5fd4b　~クリックした要素を取り出す方法~
// https://www.javadrive.jp/javascript/dom/index3.html　タグ名を指定して要素ノードを取得

// getElementsByTagName メソッド　タグ名(要素名)を指定して要素ノードを取得
// document.getElementsByTagName(tagname)　タグ名は DOMString オブジェクト（p,divとか）
// 戻り値は HTMLCollection オブジェクト

// DOMString　文字列を扱うプロパティやメソッド
// ノード　DOMツリーのルートを含む全てのオブジェクト

// document.の部分～　documentオブジェクト　Chrome等のブラウザ上で表示されたドキュメントを操作する事ができる

// 多分これでhtmlのliの部分に含まれる情報を取得出来てるはず。
let elements2 = document.getElementsByTagName("li");

// 取得した要素の表示  →[object HTMLCollection] テキストを表示させたい。 
alert(elements2);
// → unfind　上手く行かない
alert(elements2.textContent);

// getElementById・・・指定したIDにマッチするドキュメント要素を取得する　getElementsBy～で使い分けてる？

// クリックしても動かない。　クリックされた事になってない気がする。
// addEventListener　https://www.sejuku.net/blog/57625　クリックなど指定した要素に行った動作に対しての処理
// を設定
var li = document.getElementsByTagName('li');
for (var i = 0; i < li.length; i++) {
  li[i].addEventListener('click', function () {
    alert("クリックされました。")
  })
}

//  onclick　「クリック」イベントに対応して処理内容を発動
// https://komaricote.com/javascript/js-onclick/
// http://clue-design.com/javascript/id-class-click

let target1 = document.getElementsByClassName("li");
function clickEvent1() {
  document.getElementsByClassName('apple').innerHTML = "クリック";
};
target1.onclick = clickEvent1;




















function getElements() {
  let elements = document.getElementsByClassName("li");
  let len = elements.length;
  for (let i = 0; i < len; i++){
    console.log(elements.item(i).textContent);
  }
}

// 表示出来なかった。関数getElementsを設定し、中でliタグの情報を取得、タグの個数を取得し
// タグの数だけfor文で処理を行う。
// 処理内容は、コンソールログ。表示するものはhtml内のliタグi番目のtextContent（テキスト取得）
// https://www.javadrive.jp/javascript/dom/index3.html　参考ではボタンを押した際にgetElements()を呼んでると思う。
// textContent は Node のプロパティ　ノード内のテキストを文字列で取得