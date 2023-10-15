// 問題20：最後の要素を削除しよう
// .deleteを押したら 最後のliを削除しよう

const del = document.querySelector(".delete"); 
// <div class="delete">削除</div>

let tage = document.querySelector("ul");
// <ul>~</ul>

//
// 指定したHTML要素を削除する removeメソッド
// https://gray-code.com/javascript/remove-specified-html-element/
// https://www.javadrive.jp/javascript/dom/index23.html#section2



del.addEventListener("click", function () {
  tage.removeChild(tage.lastElementChild);
})

// delのクリックをトリガーにし、ul要素の子要素を削除　removeChildで子要素を対象にしている。
// removeChild(tage.lastElementChild)の()内が多分場所？
// ul要素の子要素の内、最後尾のもの・・・だと思う。


// removeChild()　親要素内の子要素（子ノード）を削除
// https://into-the-program.com/removechild/

// サイトの表示では4つしかli要素はないが、コンソールでは変化がない。
// https://web-engineer-wiki.com/javascript/array-delete/
// 配列の先頭・末尾を削除する


let tes = [2, 3, 4, 5, 8];
tes.pop();
// こっちは使えるんだが

// tage.pop();
// エラーだな