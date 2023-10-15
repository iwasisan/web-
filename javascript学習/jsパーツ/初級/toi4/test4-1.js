// querySelector() 任意のHTML要素を検出・取得することができるメソッド
// https://www.sejuku.net/blog/70581
// https://yu-nix.com/archives/js-button-click-event/#JavaScript%E3%81%A7%E3%83%9C%E3%82%BF%E3%83%B3%E3%81%AE%E3%82%AF%E3%83%AA%E3%83%83%E3%82%AF%E3%82%92%E5%87%A6%E7%90%86%E3%81%99%E3%82%8B

// appleクラスのHTML要素を所得
const btn = document.querySelector('.apple');
// <li class="apple">リンゴ</li>
// サイトの画面上で言うと、リンゴと表示された liタグの部分であり範囲


const result1 = btn.addEventListener('click', () => {
  alert("apple");
})
// appleクラスのliタグの範囲に対して、addEventListenerメソッドをしてる
// addEventListenerメソッドはここではクリックに対してのアラート
// 範囲をクリックしたらアラートが実現

const btn2 = document.querySelector(".orange");
const result2 = btn2.addEventListener("click", () => {
  alert("orange");
});
// オレンジクラスに対してHTML要素を所得
// 要素（範囲を持つ）をクリックした際のアラートを設定

const btn3 = document.querySelector(".grape");
const result3 = btn3.addEventListener("click", () => {
  alert("grape");
});
//　グレープクラスに対してHTML要素を所得
// 要素（範囲を持つ）をクリックした際のアラートを設定

// 上記でもHTML上でのクリックは分けられる。


// 下記だけでもクリック別で分ける事が出来た。


let elems = document.querySelectorAll('li');
// NodeList(3) [li.apple, li.orange, li.grape]
// 0: li.apple
// 1: li.orange
// 2: li.grape
// length: 3
// elems[0]→<li class="apple">リンゴ</li>　＝　btn

// やっている事は仕組みをつくること？
// document.querySelectorAll('li');　でliタグを全部抽出、elems[0]などの指定でそのうちの～番目の
// liタグを選択みたいにできる。

// for文でelems[0]→[2]までを1つずつ次のif文に送る
// if文でelems[0],[1],[2]を分ける。これは[0]~[2]のliタグに対する処理を分ける？
// elem[0]に対する処理、[1]に対する処理、[2]に対する処理を作る

// html上では多分ifやforは関係なく（動きはなく）、「クリック後の処理がそれぞれある」形になる。

for (var i = 0; i < elems.length; i++){
  if (elems[i] == elems[0]) {
    elems[0].addEventListener("click", () => {
      alert("apple");
    });
  } else if (elems[i] == elems[1]) {
    elems[1].addEventListener("click", () => {
      alert("orange");
    });
  } else if (elems[i] == elems[2]) {
    elems[2].addEventListener("click", () => {
      alert("grape");
    });
  }
}



// https://www.fenet.jp/dotnet/column/language/7489/
// https://1-notes.com/javascript-queryselectorall-and-queryselector/
