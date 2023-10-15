// 問題15：jsで文字を消そう
// クリックしたら文字を消しましょう！

// https://www.sejuku.net/blog/77705
// https://www.javadrive.jp/javascript/dom/index28.html

const elem = document.querySelector(".trigger");

const elem2 = document.querySelector(".target");

// 働きかける要素を指定する為の何かを得る所は同じ


elem.addEventListener("click", function () {
  elem2.style.display = "none";
})

// elemに対して、イベントリスナーでクリックしたら
// elem2に対して、スタイルを付与してる・・・・・イメージ
// イベントハンドラというのもあるらしい。リスナーが一般的、違いは登録できるイベント数が複数か
// どうか・・・
// https://web-engineer-wiki.com/javascript/event-difference/
// https://www.sejuku.net/blog/61631　これを見たらclickとonclickが全く別物ではないと感じる。



//検証ツールで見ると、確かにクリック後に、

// <div class="target">文字が消えます！</div>　が

// <div class="target" style="display: none;">文字が消えます！</div>になってる。