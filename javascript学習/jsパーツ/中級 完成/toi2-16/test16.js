// 問題16：最大値を取得しよう
// ① 変数 my_array を定義
// ② [2,19,59,203,5] を代入
// ③ 最大値をアラートに表示

const my_array = [2, 19, 59, 203, 5]; 

Math.max.apply(null, my_array);
// 203　配列の最大値
// https://magazine.techacademy.jp/magazine/27127

// Math.max関数　複数の引数に対して、最大値の引数を返す。　※最小値を出すためにはMath.min()関数
Math.max(3, 56, 1, 202);
// 202　引数の最大値

// Math.max.apply(null,array) 配列arrayの中の最大値を返す。
// https://www.sejuku.net/blog/64089
// ここでいうapplyとは、定義した関数を呼び出すことができるメソッド
// apply( , ) 第一引数は参照先？何処に表示するとか？　第二引数がここでいうと最大値を探す配列はどれか
// https://itsakura.com/js-this-apply  nullの場合はwindowオブジェクトとなる。

// https://qiita.com/mzmz__02/items/3ed731b9ed9dfb74a971　・・・よくわからん。

alert(Math.max.apply(null, my_array));
// 203　とアラートが出る。

// ただ、参考によると配列の数が凄い多いと、どうも上手く行かなくなるらしい。
// 本来配列全部見てから最大値を求める所を、全部見ずに求めてしまう動きが出てくるとか何とか・・・

let max = my_array.reduce(function (a, b) {
  return Math.max(a, b);
});
// 多分、my_array配列の前からインデックス番号0と1を比較、1と2を比較・・・としてトーナメント見たく
// 比較を続け最後に残った203が戻る・・・感じかな。
// https://blog.katsubemakito.net/html5/js-array-reduce　これ見ると分かった。
// 多分比較して残った奴は a とかに入って再度比較になるのかもしれん。それなら回りそうだ。


alert(max);
// 203　とアラートが出る。

// https://gray-code.com/javascript/get-max-value-and-minimum-value-in-array/
// https://www.choge-blog.com/programming/javascriptreduceobjectgetmaxvalue/

// https://www.sejuku.net/blog/69622
// reduce()は関数ありきかも　Math.maxに比べもっと小さい仕組みのパーツというか

let number = [2, 4, 7, 1, 5];

let result = number.reduce(function (a, b) {
  return a + b;
})

result;
// 19




