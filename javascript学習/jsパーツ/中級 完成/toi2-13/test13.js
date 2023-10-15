// 問題13：Number関数で文字列を整数に変換しよう
// ① 変数 ninja を定義、 "28" を代入
// ② ninja を整数に変換
// ③ アラートに ninja の型を表示

let ninja = "28";
// 文字列としての28

let result = Number(ninja);
// 数字としての28
// Number();　()内の文字列を数値に変換

typeof result;
// 'number'　typeof　で型を確認すると number 数値になっている。
// 文字列　を　数値に変えれるが、整数・・・なのかな。

// https://www.sejuku.net/blog/23998
// https://codelikes.com/javascript-string-to-number/

// parseInt() ()内の文字列を数値に変換 小数点以下は省かれ整数になる。
// https://www.weblio.jp/content/%E6%95%B4%E6%95%B0　整数・・・「小数でも分数でもない数」

parseInt(ninja);
// 数字としての28
// typeof　すると、'number'

// https://www.javadrive.jp/javascript/number/index8.html#section1

Number.parseInt(ninja);
// 数字としての28

typeof Number.parseInt(ninja);
// 'number'

alert(typeof result + "\n活動記録をTweetする");
// 文字列の28を整数の28に変換し、typeofで型を調べられる。
// それをアラート表示する。
// 1行目　型を表示　改行して　活動記録を～　を表示

// https://www.tairaengineer-note.com/javascript-alert-line-break-message/
// アラート内のメッセージを改行させたい。　alert('テスト\nほげほげ');　このように改行コードの【\n】を
// 改行したい場所に挟む。