// 問題6：配列から値を取得しよう

// 変数 fruits　に配列を代入しよう
// 代入する果物は "リンゴ"、"メロン"、"バナナ"　の3つ
// 代入ができたら、 "メロン" をアラートに出して見よう。

const fruits = ["リンゴ", "メロン", "バナナ"];

// https://www.javadrive.jp/javascript/array/index3.html

// 配列fruitsの指定したい要素を　[インデックス番号]　で示す。
alert(fruits[1]);

fruits[1];
// コンソールでメロンだった。

fruits.forEach(function (element) {
  alert(element);
});

// 上記だと表示を見ると、恐らく「fruitsの配列から1つずつelementに要素が
// 移動しアラート表示になる」　を配列の要素の数だけ繰り返してると思う。
// https://www.javadrive.jp/javascript/array/index10.html