// 問題17：fadeoutを使ってゆっくり要素を消そう

// 多分fadeOut()を使って・・と思うが、今回はjクエリなし縛りなので、他の方法で行う。



const elem = document.querySelector(".trigger");

const tage = document.querySelector(".target");


elem.addEventListener("click", () => {
  tage.animate(
    [
      { opacity: 1 },
      { opacity: 0 }
    ],
    {
      duration: 3000,
      fill: 'forwards'
    }
  );
  setTimeout(() => {
    tage.style.display = "none";
  }, 3000);
});

// tage.style.display = 'none' をtage.anime()の前後に挿入するとふわっとしなくなった。
// 参考みたいにanimate().finished;としても変わらず
// 参考　https://teratail.com/questions/357518


//上記はアニメーションの部分で3秒掛けて要素が透明になり
// fill: 'forwards'により再生後、最後のキーフレームの状態を保持

//setTimeoutで3秒たったらtageのスタイルにdisplay = "none"を追加

// 見た目上は3秒掛けてふわっと消えて、その後display = "none"を追加されてる。形になる。




// https://sakuragraphica.jp/web_construction/post-1963/
// ScrollReveal WEBページをスクロールしたとき、コンテンツがフェードインして現れる表現
// とかが出来るJsのライブラリ