// 問題4：クリックした番目をアラートに出そう
// 何番目のliをクリックしたかをアラートに出そう！

let elem = document.querySelectorAll('li')
// NodeList(5) [li, li, li, li, li]

elem[0]; 
// <li>1番目の忍</li>

elem[0].innerText;
// '1番目の忍'

alert(elem[0].innerText);
// 1番目の忍　とアラートに表示

for (let i = 0; i < elem.length; i++){
  elem[i].addEventListener('click', function () {
    alert(elem[i].innerText);
  })
}

// elemの配列0番目から4番目までに対して、クリックした際のアラートイベント
// を設定。
// https://qiita.com/gishitomi/items/269f6884625bfff5fd4b


// innerTextとは、内部の文字情報という意味になります。
// つまり、HTML要素の < 開始タグ > と < 終了タグ > に内包されたテキスト
// https://ywork2020.com/content/js-element-innertext.html