/* javascript */

let expantion = document.getElementsByClassName("underline-before");
// .underline-beforeのついたDOMを取得

let expantionswitch = ["off", "off"];
// 下線を引くアクションを行ったか行ってないかのスイッチを配列の値で表現。初期値はoff

window.onscroll = function () {
  // スクロールした場合、関数（function）を実行

  for (let i = 0, len = expantion.length; i < len; i++) {
    // .underline-beforeの数だけ繰り返しするfor文

    let ex_clientRect = expantion[i].getBoundingClientRect();
    // [i]番目の.underline-beforeの境界ボックスを取得（画面内での.underline-beforeの位置を取得）

    let wh = window.innerHeight;
    // ブラウザのウインドウの表示領域の高さを取得。（ページの上からどれだけ進んだか計る）

    if (wh > ex_clientRect.top + 100 && expantionswitch[i] === "off") {
      // if文による分岐。もしウインドウの表示領域の高さが、[i]番目の.underline-beforeの画面内での上からの位置+200pxより
      // 高かった場合。また、[i]番目のexpantionswitchがoffの場合にtrueの動作を返す。

      expantion[i].classList.add("underline-after");
      // [i]番目の.underline-beforeがついている要素に新たに.underline-afterを追加。これによって下線を引くアクションが実現する。

      expantionswitch[i] = "on";
      // offだった配列の値をonにする。これによって二度同じ動作をするのを防いでいる。
    }
  }
};
