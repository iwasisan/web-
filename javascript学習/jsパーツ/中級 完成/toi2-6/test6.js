// 問題6：「なるほど！」と返す関数を作ってみよう
// 何を引数に入れても、「なるほど！"引数"なんですね！」と返す関数を作り、
// alertに出してみよう。


function yama(object) {
  console.log("なるほど！");
  alert("なるほど！" + "\"引数\"" + "なんですね！");
}

yama(100);

yama("ee");

// 文字列のエスケープ "引数"だと　" "が文字列の一部と認識されなかったっぽい。
// \を付けると文字列と認識されられる。
// https://developer.mozilla.org/ja/docs/Learn/JavaScript/First_steps/Strings