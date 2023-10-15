// 問題12：要素末に子要素を追加しよう

let elem = document.querySelector(".target");

elem.insertAdjacentHTML("beforeend", "<p>ダミーテキストF</p>");

// insertAdjacentHTML　htmlのタグ要素を挿入出来る感じかな。使い方はinsertAdjacentTextと似てるが
// ‘beforeend’：対象の要素の子要素の末尾にhtmlを追加

// つまりこの場合は1文目でtargetクラスを持つdiv要素を指定できるようにする。
// 取得してるものが上手く表現しにくいけども

// 2文目でその「div要素の子要素の末尾」という場所にpタグの要素を挿入してるイメージ

// 結果として、文が追加される。

// insertAdjacentText　こっちはテキストオンリーな気がする。

// https://tcd-theme.com/2022/08/javascript-dom-adding-text.html

// insertAdjacentText  insertAdjacentHTML　別の物を使ってる事に気付く。
// 違いはないか。
// 参考https://shiba-sub.sakuraweb.com/?p=9132
// insertAdjacentHTML()は、HTMLノードを DOM ツリー内の指定された位置に挿入する。
// insertAdjacentText()は、テキストノードを、DOM ツリー内の指定された位置に挿入する。

// index.htmlのscriptタグの場所がdivより前だったら反映されなかった。



// 他　要素追加、書き換えに使えそうなもの
// https://note.affi-sapo-sv.com/js-innerhtml-innertext.php
// https://www.sejuku.net/blog/26442
// innerHTML　innerText　（プロパティ）　　　　　appenChild　（メソッド）　等手段が多い！
// プロパティ：「特性」とか「属性」


