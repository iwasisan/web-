// 問題7：色を取得して赤なら青にしよう

// 青色の中に１つだけ赤色のliタグがある
// １つ１つクリックしていき、もし赤色だった場合
// 青色に変えよう

let elem = document.querySelectorAll("li");
// NodeList(5) [li, li, li, li, li]

// HTML要素に適用されたスタイルを取得する
// https://gray-code.com/javascript/get-css-applied-to-html-element/

elem[0];
// 一番左のli要素

getComputedStyle(elem[0]).backgroundColor == "rgb(0, 0, 255)";
// 'rgb(0, 0, 255)' 一番左のli要素の色 結果はtrue

elem[1].addEventListener("click", function (e) {
  if (getComputedStyle(elem[1]).backgroundColor == "rgb(0, 0, 255)") {
    e.target.style.backgroundColor = "white";
  }
})
// 左から2番目のli要素をクリックした際、背景色が"rgb(0, 0, 255)"かどうか判定し 色を変える。
//  e.targetの意味が薄い気がする。elem[1]に置き換えても行けたし、なおelemやelem[0,1,2]としても
// うまく動かない。elem[0,1,2]はelem[2]になるみたい。


for (let i = 0; i < elem.length; i++){
  elem[i].addEventListener("click", function (e) {
    if (getComputedStyle(elem[i]).backgroundColor == "rgb(255, 0, 0)") {
      e.target.style.backgroundColor = "rgb(0, 0, 255)";
    }
  })
}

// 動いた。動いたぞ。e.targetでもelem[i]でもオッケー。
// elem.addEventListener("click", (){ }) いると思ってつけたら動かなくなったけど。

// elem[1]に対してクリック後addEventListener("click"　色判定しif (getComputedStyle(elem[1]).backgroundColor == "rgb(0, 0, 255)")
// trueなら色を変える。style.backgroundColor = "white"
// これをfor文でliの数だけ用意した、だから判定としては。それぞれに対してelem[1].addEventListener～
// が用意されているイメージ、多分これなら個別で用意してるので、要素数が10万個でも1個目と10万個目で結果表示までに遅延が
// 生じるとかはないはず。


// https://webcreatetips.com/coding/3563/

// https://webcreatetips.com/coding/3563/
// https://www.zunouissiki.com/diffrent-target-currenttarget/
// e.targetは、イベントが発生した要素　・・・？？