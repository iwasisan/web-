// 問題3：変数の中の文字列を置き換えよう

let text1 = "リンゴ・バナナ";
let text2 = "レモン"

alert(text1 + "・" + text2);
// リンゴ・バナナ・レモンになる。・がない場合
// リンゴ・バナナレモンになる。

// replace()メソッド　任意の文字列を別の文字列に置き換える（置換）ことができる
// https://www.sejuku.net/blog/21107
// https://khufrudamonotes.com/how-to-use-javascript-replace

// 左側に置き換えたい文字列、右側に置き換える文字列　text1に対し行い、結果をresultに入れる。
let result = text1.replace('バナナ','');
    
alert(result);
// リンゴ・スイカ　と表示　リンゴ・バナナ　が　リンゴ・に変わる。
// result内の結果を表示

alert(result + text2);
// リンゴ・レモン になる。多分リンゴ・バナナレモンからバナナが ' ' によって
// 消えた（上書きされた？）、文字列として短くなったと思う。その結果
// 「リンゴ・」　＋　「レモン」　→　リンゴ・レモン
