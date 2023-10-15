// 問題25：入力値が変わったら表示しよう


let result = document.querySelector(".val");
// <div class="val"></div>

let inp = document.querySelector("input");
// <input type="text"></input>
// 監視する要素

inp.value;
// 入力した文字列


let mo = new MutationObserver(function (mutations) {
  mutations.forEach((mutation) => {
    alert("値に変化あったよ");
  })
});

let config = {
  childList:true
};

inp.addEventListener("change", function () {
  result.textContent = inp.value;
})

mo.observe(result, config);

// 一応動いたは動いたという感じですね。何に使うのだか・・・
// 検証ツールを見て、中身が変わってるのはinputではなくresultだったので
// リザルトを対象にし、インプットが変わった時にresultに入力した文字列を
// 代入（中身の変化が起こる）その変化をチェックする為configで何を見るか
// 何処を見るか指示し監視対象とチェック項目を伝えてresultをobserve(監視)
// configに引っかかったら、moで指定した動きをさせる。
// mutations →　mutation　の順に変化の証拠の何かが引数として渡される
// 今回その引数についての操作はなくアラート表示だけさせている。

// ※コンソールログで見たが「なんじゃこりゃ」だったのでそっと閉じた。


// https://qiita.com/ryo_hisano/items/9f15ae87d691d497bc17
// https://www.webdesignleaves.com/pr/jquery/mutationObserver.html


