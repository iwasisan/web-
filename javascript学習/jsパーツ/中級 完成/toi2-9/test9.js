// 問題9：文字数をカウントしよう
// ①変数 ninja を定義 
// ②文字列 "忍者CODE" を代入 
// ③文字数をアラートにだす。

const ninja = "忍者CODE"

// https://qiita.com/bon127/items/491b25e90208188dafbd
// JavaScriptで文字数を数えるのはそんなに簡単ではない

ninja.length;
//6

// string.lengthを使用。最もシンプル　UTF-16 コードユニットの数をカウントしている。
// コードユニット・・&#xA9; => ©　多分このことじゃない？
// 問題点、コードユニットの組み合わせで登録されている文字がある。　サロゲートペア文字

// 　length は、 string インスタンスの読み取り専用データプロパティ

// https://webukatu.com/wordpress/blog/14452/#i-2 プロパティは、先述したオブジェクトの状態を知るために用います。
// 【初心者向け】JavaScript プロパティとは

alert(ninja.length);

// https://codechacha.com/ja/javascript-convert-string-to-array/
// JavaScript - 文字列を配列（Array）に変換

const ninja2 = [...ninja];
// ['忍', '者', 'C', 'O', 'D', 'E']

ninja2.length;
// 6
// これでもいけそう