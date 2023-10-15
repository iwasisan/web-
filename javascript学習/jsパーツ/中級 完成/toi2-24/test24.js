// 問題24：ダブルクリックでアラートを出そう
// .doubleをダブルclickしたら
// アラートに "ダブルclickされました!" と出そう

const doub = document.querySelector(".double");
// <div class="double">ダブルクリック</div>


// https://www.javadrive.jp/javascript/event/index14.html
// dblclickイベント：マウスがダブルクリックされたとき



doub.style.display = "inline-block"


doub.addEventListener('dblclick', function () {
  alert("ダブルclickされました!");
})

// 'dblclick' マウスが短い間隔で2回クリックされた時　を指定
// ダブルクリックの文字を2回カチカチっとクリックした際に
// アラート表示

// 改良点：そのままでは、文字の横をクリックしても反応するため
// 多分ブロック要素が要因と考えた。

// なのでインラインブロック要素にスタイルを変えたら、文字部分のみ
// クリックしたら反応、それ以外は反応なしに出来た。・・と思う。
