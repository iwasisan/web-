// 問題17：要素を複製しよう
// .cloneをクリックしたらulの最後に複製したliを複製しよう


// cloneNodeメソッド 指定された要素の複製を作成するメソッド
// node.cloneNode(deep)
//node(複製したいhtml要素)　deep:trueかfalseが入り、指定した要素のどのくらいまでコピーするか階層を指定する
// true 複製元とその子孫要素全て　falseは複製元の要素のみ　デフォルトはfalse

// https://tech.mychma.com/javascript-clonenode/1661/
// https://www.imamura.biz/blog/26914

// https://www.sejuku.net/blog/27019  【JavaScript入門】getElementById

let copybtn = document.querySelector(".clone");
//  <div class="clone">複製する</div>

let copytarget = document.querySelector("li");
//  <li>…</li> 忍者CODE

let copybox = document.querySelector("ul");

let body = document.querySelector("body");

let clone1 = copybtn.cloneNode(true);
// <div class="clone">複製する</div>　がコピーされた（一つだけ）それをclone1に入れてる。
// だけである。画面に表示するのは別の動き
// 物としてはコピーはある。それを次のコードで追加出来る。

// appendChildメソッド　親要素の末尾に要素を追加 何処に差し込むか、何を親要素とするか。
// https://www.sejuku.net/blog/49970

body.appendChild(clone1);
body.appendChild(clone1);
// 用意したコピーは一つだから、2個3個としたい時は再度必要なのかな
// また、こう記載するとdivの中にdivが入ってしまうことは防げるが、どうもbody要素のから見て最後に入る。
// div要素を2個続ける場合はまた別らしい。

copybtn.addEventListener("click", function () {
  copybox.appendChild(copytarget.cloneNode(true));
})

//copybox.appendChild にてcopyboxはul部分にしないとul~~/ul　の間にli~li　を挟む形にならない。

// 複製するをクリックしたら。ulを親要素として、その中の最後尾に追加する。
// 追加するのはcopytargetのliの間全体を含めたコピーである。
// それを一つ追加する。（クリックするたびに）

// また、クリックして効果があるのはイベントリスナーで設定したcopybtnの部分であり、
// サイト上見た目が同じでもクローンはクリックしても効果がなかった。
// このクローンにも（イベントごとコピーさせるのはまた別かも）





