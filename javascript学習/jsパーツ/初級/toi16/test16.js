// 問題16：要素をフェードインさせよう
// クリックしたら文字をふわっと(フェードイン)出現させましょう！

const elem = document.querySelector(".trigger");

const tage = document.querySelector(".target");



elem.addEventListener("click", function () {
  setTimeout(function () {
    tage.style.display = "";
  }, 3000);
});
// https://dubdesign.net/javascript/settimeout-fadeinout/
// setTimeout()　タイマーを設定するメソッド

// クリック後、3秒経ったら、tage：<div class="target" style="display: none;">
// のdisplay: none;を消す動きになっているっぽい。

// 3秒たったらパッと表示されてしまった。・・・参考サイトではcssでキーフレームとか
// 描いてるし、javascriptとcssで動きを分けてる記載があったけど、イメージしにくい
// cssだけでアニメーション制御出来るんじゃ・・javascriptは何処を担当してる？
// 全体の動きをどう分けてる？
// http://lab.informarc.co.jp/css/css3_animation_controlled_by_js.html　CSS3アニメーションをJSで制御に関して。
// うーーーーーーん。

elem.addEventListener('click', () => {
  tage.style.display = "";
  tage.animate([{ opacity: "0" }, { opacity: "1" }], 1500);
});

// クリック後に、アクションをする所までは同じと思う。（アロー関数みたいな書き方だけど、そこは
// どっちでもいいと思う。

//1行目でnoneが消えるから、すぐ表示されるんじゃないかと思ったけど。

// 多分2行目のanimateの設定でnoneは消えたけど、アニメーションするopacityがくっついて
// 1.5秒掛けて'0 ~ 1'に数字が変わっていった。　サイト上では徐々に見えてくる（フェードイン）

// https://teratail.com/questions/357518


// animateメソッド（jQueryにも同名のメソッドあり）
// https://note.affi-sapo-sv.com/js-dom-animate.php
// 要素.animate( キーフレーム , タイミング );
// 多分キーフレームの部分はcss:keyframeの0 % ~100 % の部分　タイミングは　再生時間
// 細かい設定は出来そうだけど、([{0%},{100%}],再生時間)作成したのは多分こういう設定。
