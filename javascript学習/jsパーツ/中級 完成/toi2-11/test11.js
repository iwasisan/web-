// 問題11：配列から１番後ろを削除しよう
// ①配列 ninja を定義
// ② 1,3,5,7 を代入
// ③1番後ろの7を削除しアラートに表示

let ninja = [1, 3, 5, 7];

ninja.pop();
// pop()を付けると配列の末尾が削除される。配列の要素数が減る。引数の指定はない。
// 7

// ninja.pop();
// これで2個目なので、ninja = [1, 3] となる。
// なお検証ツールで記載したninja.pop();もカウントされる。
// 5　　検証ツールで記載した　ninja.pop();　は　3　だった。

// https://web-engineer-wiki.com/javascript/array-delete/　配列の先頭・末尾を削除する方法
// https://uxmilk.jp/13759

ninja;
// [1, 3, 5]

alert(ninja);
// [1, 3, 5]がアラートに出る。

ninja.shift();
// [1, 3, 5]から先頭の要素を削除する。

alert(ninja);
// [3,5]がアラートに出る。