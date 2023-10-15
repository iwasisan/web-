// 中級　「２」カラーピッカーで取得した色を反映　「７」色を取得して赤なら青　初級「５」2秒後にアラート
// マス目の色合わせのアレを作る。

let senko = document.querySelector(".title1");

let starbtn = document.querySelector("a");

let secolor = document.querySelector("#color-change1");

let kouko = document.querySelector(".title2");

let kouolor = document.querySelector("#color-change2");

let rulr = document.querySelector("h1");

let koma1 = document.querySelector(".bl1");

let koma2 = document.querySelector(".bl2");

let koma3 = document.querySelector(".bl3");

let koma4 = document.querySelector(".bl4");

let koma5 = document.querySelector(".bl5");

let koma6 = document.querySelector(".bl6");

let koma7 = document.querySelector(".bl7");

let koma8 = document.querySelector(".bl8");

let koma9 = document.querySelector(".bl9");

secolor.addEventListener("change", function () {
  senko.style.color = secolor.value;
})

kouolor.addEventListener("change", function () {
  kouko.style.color = kouolor.value;
});


koma1.addEventListener("click", function (e) {
  e.target.style.backgroundColor = secolor.value;
})

koma1.addEventListener("dblclick", function (e) {
  e.target.style.backgroundColor = kouolor.value;
});

koma2.addEventListener("click", function (e) {
  e.target.style.backgroundColor = secolor.value;
});

koma2.addEventListener("dblclick", function (e) {
  e.target.style.backgroundColor = kouolor.value;
});

koma3.addEventListener("click", function (e) {
  e.target.style.backgroundColor = secolor.value;
});

koma3.addEventListener("dblclick", function (e) {
  e.target.style.backgroundColor = kouolor.value;
});

koma4.addEventListener("click", function (e) {
  e.target.style.backgroundColor = secolor.value;
});

koma4.addEventListener("dblclick", function (e) {
  e.target.style.backgroundColor = kouolor.value;
});

koma5.addEventListener("click", function (e) {
  e.target.style.backgroundColor = secolor.value;
});

koma5.addEventListener("dblclick", function (e) {
  e.target.style.backgroundColor = kouolor.value;
});

koma6.addEventListener("click", function (e) {
  e.target.style.backgroundColor = secolor.value;
});

koma6.addEventListener("dblclick", function (e) {
  e.target.style.backgroundColor = kouolor.value;
});

koma7.addEventListener("click", function (e) {
  e.target.style.backgroundColor = secolor.value;
});

koma7.addEventListener("dblclick", function (e) {
  e.target.style.backgroundColor = kouolor.value;
});

koma8.addEventListener("click", function (e) {
  e.target.style.backgroundColor = secolor.value;
});

koma8.addEventListener("dblclick", function (e) {
  e.target.style.backgroundColor = kouolor.value;
});

koma9.addEventListener("click", function (e) {
  e.target.style.backgroundColor = secolor.value;
});

koma9.addEventListener("dblclick", function (e) {
  e.target.style.backgroundColor = kouolor.value;
});

rulr.addEventListener("click", function () {
  alert("好きな色を決めて\n交互に色を変えるよ。\n3つ同じ色が揃ったら勝ちだよ\n" +
  "先行はクリック、後攻はダブルクリックで色が変わるよ\n"+"制限時間は1分だよ")
})


const alerttime = function () {
  alert("そこまで！");
}

setTimeout(alerttime, 60000);


starbtn.addEventListener("click", function () {
  setTimeout(alerttime, 60000);
})