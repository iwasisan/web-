// [17] 要素を複製[20] 要素の削除[21]初級[10]クラスの付けはがし
// [25]入力値が変わったら表示しよう
// 目的・・簡単なレイアウトっぽいのが組める。

const fontclon = document.querySelector(".clone1");
const fontdel = document.querySelector(".delete1");
const imgclon = document.querySelector(".clone2");
const imgdel = document.querySelector(".delete2");
const body = document.querySelector("body");

let toggl2 = document.querySelector(".toggle-3");
let toggl = document.querySelector(".toggle");


let imbox = document.querySelector(".img-box");
let ime = document.querySelector(".img");


let fonbox = document.querySelector(".font-box");
let name1 = document.querySelector(".font");


const sortbtn = document.querySelector(".sort");
const dblcln = document.querySelector(".dblclone");
const imechan1 = document.querySelector(".chara-select1");
const dblde = document.querySelector(".dbldel");


let inp = document.querySelector("input");

fontclon.addEventListener("click", function () {
  fonbox.appendChild(name1.cloneNode(true));
})
// 文字複製

imgclon.addEventListener("click", function () {
  imbox.appendChild(ime.cloneNode(true));
})
// 画像複製

fontdel.addEventListener("click", function () {
  fonbox.removeChild(fonbox.lastElementChild);
})
// 文字削除

imgdel.addEventListener("click", function () {
  imbox.removeChild(imbox.lastElementChild);
})
// 画像削除

sortbtn.addEventListener("click", function () {
  toggl.classList.toggle("toggle-2");
})
// flex:colum　の付けはがし

dblcln.addEventListener("click", function () {
  body.appendChild(toggl2.cloneNode(true));
})
// セットのコピー

dblde.addEventListener("click", function () {
  body.removeChild(body.lastElementChild);
})



inp.addEventListener("change", function () {
  name1.textContent = inp.value;
})
// インプットした名前に変更出来る。

let imearr = new Array("img/13590049p.jpg", "img/2021-04-18_13h42_01.png", "img/FyQgF6maYAAQ1eK.jpg");
let num = 0;

imechan1.addEventListener("click", function () {
  if (num == 2) {
    num = 0;
  } else {
    num++;
  }
  document.getElementById("ori").src = imearr[num];
})

// 画像切り替え