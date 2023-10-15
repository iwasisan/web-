// 組み合わせ。[10],[11]　をまず組み合わせる。 違う物が出来た・・・
// クラスのつけはがしでなく、スタイルのつけはがしになってる。

// ボタンを押したら、要素が追加されたり削除されたりするイメージ
// クラスの付けはずしで、見せたり、隠したりするような
// [11],[16]の組み合わせ

let elem = document.querySelector(".target");
// div　要素

let newelem = document.createElement("p");
let newcontent = document.createTextNode("追加要素１");
// 追加する要素を作る

newelem.appendChild(newcontent);

// https://kita-note.com/js-summary-of-how-to-add-elements#3_%E8%A6%AA%E8%A6%81%E7%B4%A0%E3%81%AE%E6%9C%80%E5%88%9D%E3%81%AE%E5%AD%90%E8%A6%81%E7%B4%A0%E3%82%92%E8%BF%BD%E5%8A%A0%E3%81%99%E3%82%8B
// newelem　<p>~</p>

// newelem.classList.add("togu");
// <p class="togu">追加要素１</p>

newelem.style.display = "none";

elem.insertBefore(newelem,elem.firstChild)
// 特定の要素の直前に追加するinsertBefore()

elem.addEventListener("click", function () {
  newelem.style.display = "";
  newelem.animate([{ opacity: "0" }, { opacity: "1" }], 1500);
})

