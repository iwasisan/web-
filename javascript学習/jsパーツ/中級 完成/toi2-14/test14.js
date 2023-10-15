// 問題14：配列から3番目の値を取得しよう
// ① 配列 ninja を定義、[2,4,52,9,38] を代入
// ② 3番目の値をアラート

const ninja = [2, 3, 52, 9, 38];

ninja[0];
// 配列の内、インデックス番号0番目の要素

alert(ninja[3]);
// 3番目の値をアラート 9がアラートされる。

// 3番目までの要素を取り出す際はsliceメソッド、多分非破壊的   splice 関数（多分破壊的）とは違うよ！
// https://tsukadaryo.com/javascript-array-element/


ninja.slice(2, 3);
//  [52]
ninja.slice(2, 2);
// []
ninja.slice(2, 4);
// [52, 9]

// [2,3,53,9,38] 第一引数はインデックス番号、カウント開始位置
// 第二引数は配列の1番目とか2番目とかの数字　なので(2,4) インデックス番号2番の52　
// から配列番号4の9までになったと思われる。

alert(ninja.slice(3, 4));
// 9がアラートされる。

// 配列から特定の要素を取り出す(splice, findIndex, pop, shift)
// https://www.javadrive.jp/javascript/array/index13.html

// findIndex メソッド
// 引数に指定したコールバック関数の中で定義した条件式を満たす要素を配列の先頭から検索することができる。
// 関数とセットで使う

const index = ninja.findIndex(function (elem) {
  return elem == 9;
});
// 3 指定条件に一致する要素のインデックスが戻る。　インデックス番号3番目

const x = ninja.splice(index, 1);
// [9]
// ninja[2, 3, 52, 9, 38]に対して、インデックス番号3の要素を1つ取り出して配列に。
// splice(3,1)


alert(x);
// 9がアラートされる。

// splice 関数 n番目の要素を取り出す
// splice(index ,howMany )
// 第1引数(index)で取り出す要素のインデックスを指定
// 第2引数(howMany)で指定インデックスから何個要素を取り除くかを指定


// https://www.javadrive.jp/javascript/array/index13.html#section1
// https://webbibouroku.com/Blog/Article/js-array-1