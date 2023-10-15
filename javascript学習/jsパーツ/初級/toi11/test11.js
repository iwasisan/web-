// 問題11：要素頭に子要素を追加しよう

// addEventListenerの対象がdocument（ホームページ）

// タイミングはDOMContentLoaded　Webページが読み込みが完了したとき
// （画像などのリソースは含まない）

// その時function () {} 何らかの動き？をさせる。

// その動きの中で、「何処に」「何を」するか、対象はdocument.getElementsByClassName('target');

// その後多分、idと違ってelem[0]で何処にある（targetクラスが複数あると仮定して）
// targetクラスか指定し、それに対してinsertAdjacentTextメソッドを掛けてる。・・と思う

// insertAdjacentTextメソッド　要素に対して指定した箇所にテキストを追加出来る。
// insertAdjacentText("afterbegin", "ダミーテキストA");
// ('追加する場所','追加したいテキスト')

document.addEventListener('DOMContentLoaded',function () {
  const elem = document.getElementsByClassName('target');

  elem[0].insertAdjacentText("afterbegin", "ダミーテキストA");
})

// テキスト追加についての参考
// https://blog-and-destroy.com/34296

// 要素のテキストを取得・変更｜textContent

// addEventListener　のイベント種類、多分loadでもいいはず、ただ読み込む順の指定で
// 先にこの文章を表示させたいとかの違いじゃないかと思う。
// https://qiita.com/mzmz__02/items/873118fbd8723c44956d

document.addEventListener('DOMContentLoaded', function () {
  const elem2 = document.querySelectorAll("p");

  elem2[2].textContent = "コンテナクエリ";
  // elem2[2].textContent　インデックス番号2番目の要素のテキストを変更（上書き？）
  // 注意：追加される前の個数で見てインデックス番号2番目になります。だからちょっと想定と違ってた。
})

// https://www.delftstack.com/ja/howto/javascript/javascript-add-text/
// https://www.sejuku.net/blog/49970
// appendChild　サイトを見ると、ない所に追加するとかでなく、すでに文章があるところに挿入してる
// みたい、追加する場所は決まってる”afterbegin”こんな指定はなさげ

// 他の参考サイト
// https://tcd-theme.com/2022/08/javascript-dom-adding-text.html


/// https://blog-and-destroy.com/34296　の中で気になった所
// insertAdjacentText()はElement のメソッド

// Element ってなに？
// https://qiita.com/andota05/items/a2292d2b7780ed5faa31

// Element(要素)とは、<p>要素の内容</p>のように「タグ」+「内容」の組み合わせのこと。
// つまり・・htmlのタグの要素に対して働きかけれる　「何らかの処理をする仕組み」って事か


// HTMLCollection(5) でも　NodeList(5) 　でも同じ動きが出来た。違いはあるのか。

// 参考サイト
// https://qiita.com/sokusekimen/items/3ca68b3fe9605a792e74
// https://zenn.dev/sqer/articles/2d4def0f07bf04c5cc47

// 読んだけど、ちょっとよく分からない。

document.getElementsByTagName('p');
// HTMLCollection(5) 

document.querySelectorAll('p');
// NodeList(5) 　　　　　