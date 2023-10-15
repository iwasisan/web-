// 問題8：引数が整数ならアラートを出す関数を作ろう
// ① 関数 ninja を定義 ② 引数は target とする ③ target が整数ならアラートを出す。

function ninja(target) {
  if (Number.isInteger(target)) {
    alert(target + "は整数です。");
  }
}

ninja(33);

ninja("3");

ninja([3]);

ninja(3);

// ninja()でninja関数を呼び出し引数targetに()内の数字を渡す。
// ninja()の動きはifを動かすこと、ifが動く条件は()内がtrueとなる事
// Number.isInteger(target)のtargetにも引数と同じ数字が入る
//  Number.isIntegerは整数だったら「true」を返す。
// 「true」になったらifが動く、そしたらアラートが出る。


// 値が整数かどうかを調べる https://www.javadrive.jp/javascript/number/index12.html
// Number オブジェクトの Number.isInteger メソッド
// 対象の値が整数かどうかを調べて true または false を返す