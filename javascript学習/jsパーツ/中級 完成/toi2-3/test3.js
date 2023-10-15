// 問題3：flexを使わずにボックスの高さを揃えよう
// １番高さの大きいliタグの高さを取得して、他のliタグにも反映させよう

// https://qiita.com/ringtail003/items/00d40b4b586d33b0737a

const target = document.querySelectorAll("li");
// NodeList(3) [li, li, li]

target[0];
//   <li>これは忍者CODEの問題です。</li>

target[0].clientHeight;
//  64  サイト画面でいうと1番左の要素の高さ。

const heightarry = [];

target.forEach(function (value) {
  heightarry.push(value.clientHeight)
})
// pushメソッド配列の最後に 1 つまたは複数の要素を追加できる
// 多分forEachで一つずつtarget（配列）の要素をvalueにいれ
// その要素の高さが一つずつ空の配列に後ろからpushされた。・・のではないか。

// https://ja.stackoverflow.com/questions/61763/foreach%E3%81%A7%E5%9B%9E%E3%81%97%E3%81%9Fobject%E3%81%AE%E5%80%A4%E3%82%92%E7%A9%BA%E3%81%AE%E9%85%8D%E5%88%97%E3%81%ABpush%E3%81%97%E3%81%9F%E3%81%84
// https://designsupply-web.com/media/programming/4972/
// https://www.sejuku.net/blog/31671

heightarry;
//  [64, 232, 136]

//     配列内の数値の最大値を取得; Math.max.apply
// https://shanabrian.com/web/javascript/math-max-array.php

maxheight = Math.max.apply(null, heightarry);
// maxheight;  232

target[0].style.height = maxheight + 'px';
// https://tech.adseed.co.jp/JavaScript%20height%20change
// 要素の高さ（height）を変更する 要素.style.heightに代入すれば、高さを変更できます。
// target[0]　の高さが　64から232に



for (let i = 0; i < target.length; i++){
  target[i].style.height = maxheight + 'px';
}
// target[i]　のi をfor文で0からlistタグの間にある数だけ回して、それぞれに対して
// target[0]で行った事をしてみる。