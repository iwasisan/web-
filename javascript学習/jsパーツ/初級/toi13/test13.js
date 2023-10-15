// concat()で配列・文字列を結合やコピー 問題とは関係ないけど参照について
// イメージしやすいのでいい。
// https://www.sejuku.net/blog/55624


// 問題13：特定の要素の後ろ隣に要素を追加しよう


// innerhtmlとは、htmlで使われているタグの中身を
// 取得・変更できる(疑似的な追加も可能）javascriptのプロパティ
// https://into-the-program.com/javascript-add-elements-innerhtml/

let elem = document.getElementsByClassName("target");
// targetクラスのdivを取得

// 何処のtargetクラスのdivか指定し、既存のテキストを消さないようにして追加　.innerHTML +=
// https://www.sejuku.net/blog/26442

elem[0].innerHTML +=
  "<p>ダミーテキストF</p>" +
  "<p>ダミーテキストG</p>" +
  "<p>ダミーテキストH</p>" +
  "<p>ダミーテキストI</p>" +
  "<p>ダミーテキストJ</p>";

  // ただこれは、厳密にいうと追加ではないらしい　要素内に付いていたイベントは削除されてしまう
  // DOMに要素を挿入する場合、一般的にはappendChild()やinsertAdjacentHTML()を使用
  // https://chaika.hatenablog.com/entry/2020/02/17/083000　イベントを消したい場合はいいかもというアイデア

    elem[0].insertAdjacentHTML(
    "afterbegin",
    "<p>ダミーテキストF</p>" +
      "<p>ダミーテキストG</p>" +
      "<p>ダミーテキストH</p>" +
      "<p>ダミーテキストI</p>" +
      "<p>ダミーテキストJ</p>"
);
  // 何かこれでも行けた。　あとFragmentとかも使えそうだが・・・ちょっと難しそう・・
  // https://qiita.com/39_isao/items/2fa8faed283d455f4181



