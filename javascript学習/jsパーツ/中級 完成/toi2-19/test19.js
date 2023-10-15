// 問題19：横スクロール値を取得しよう
// .x-scrollの横スクロール値を
// .scroll-valに表示させよう


// scrollLeftで要素内の横スクロール量を取得
// https://web-tsuku.life/scrollleft/#i-2
// scrollイベント
// https://web-engineer-wiki.com/javascript/scroll-event/#scroll

let scrotext = document.querySelector(".x-scroll");
// <div class="x-scroll">忍者CODE忍者CODE忍者CODE忍者CODE忍者~

let scrocheak = document.querySelector(".scroll-val"); 
// <div class="scroll-val">0</div>  scroll-valと書くとnullになります

scrotext.scrollLeft;
// スクロールを動かすと0～1291　まで可変する。 数字が戻ってくる
//

scrocheak.innerHTML = scrotext.scrollLeft;
// 左　文字としての0　右　数字（0～1291）




// 【JavaScript】スクロール量を取得する
// 

scrotext.addEventListener("scroll", function () {
  let x = scrotext.scrollLeft;
  scrocheak.innerHTML = x;
});
// なんか行けたぞ。
// 多分x-scrollクラスの文字をスクロールした瞬間にその時その時のscrotext.scrollLeftの数値を
// 変数ｘに入れて、そのｘの数値を代入。scroll-valクラスのhtml書き換えinnerHTML）でここに入れたら書き換わるよって
// 場所を用意する。それがスクロールしてる間に絶え間なく起こっている。

// https://web-tsuku.life/scrollleft/#i-2