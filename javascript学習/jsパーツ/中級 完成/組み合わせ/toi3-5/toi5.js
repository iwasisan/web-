// [17] 要素を複製[20] 要素の削除[21]属性を削除 初級[10]クラスの付けはがし

const fontclon = document.querySelector(".clone1");

const fontdel = document.querySelector(".delete1");

const imgclon = document.querySelector(".clone2");

const imgdel = document.querySelector(".delete2");

let imbox = document.querySelector(".img-box");

let fonbox = document.querySelector(".font-box");

let toggl = document.querySelector(".toggle");

const chara = document.querySelector(".img");

const charaname = document.querySelector(".basic");

const sortbtn = document.querySelector(".sort");

const fontbtn = document.querySelector(".fontchange");

const btnchan = document.querySelector(".btnchange");

fontclon.addEventListener("click", function () {
  fonbox.appendChild(charaname.cloneNode(true));
})
// 文字複製

imgclon.addEventListener("click", function () {
  imbox.appendChild(chara.cloneNode(true));
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

fontbtn.addEventListener("click", function () {
  charaname.removeAttribute("id");
})

fontbtn.addEventListener("dblclick", function () {
  charaname.setAttribute("class","ki");
});
// クリック、ダブルクリックで属性値チェンジ

btnchan.addEventListener("click", function () {
  fontclon.classList.toggle("a");
  fontdel.classList.toggle("a");
  imgclon.classList.toggle("a");
  imgdel.classList.toggle("a");
})
