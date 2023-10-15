// 問題25：入力値が変わったら表示しよう
// inputに入力した値に変化があった場合に、
// .valに値を表示しましょう。

let result = document.querySelector(".val");
// <div class="val"></div>


let inp = document.querySelector("input");
// <input type="text"></input>
// 監視する要素

inp.value;
// 入力した文字列



inp.addEventListener("change", function () {
result.textContent = inp.value;
})

// フォーカスと動きはほぼ似てるような・・・
// テキストボックスが変化したら
// 値を表示


// https://at.sachi-web.com/blog-entry-1516.html
// 要素の中身が変化した時にイベントを起こしたい

// https://pisuke-code.com/mutation-observer-usage/
// https://pisuke-code.com/mutation-observer-infinite-loop/

    // let mo = new MutationObserver(function () {
    // alert("入力した値に変化あったよ");
    // });


  // let config = {
    // attributes: true
  // };


  // mo.observe(inp, config);
// MutationObserverは上手く動かなかった




