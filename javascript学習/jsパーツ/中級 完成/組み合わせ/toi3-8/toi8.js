// [6]配列から値を取得、「４」クリックした番目をアラート

let mypic = document.querySelector(".mypic");

let pichu = document.querySelector(".mypic1");

let picAur = document.querySelector(".mypic2");

let picEre = document.querySelector(".mypic3");

let picLala = document.querySelector(".mypic4");

let picMiko = document.querySelector(".mypic5");

let picRuga = document.querySelector(".mypic6");

let picbox = new Array("img/hyur.jpg", "img/Au-ra.jpg", "img/Elezen.jpg", "img/Lalafell.jpg", "img/Miqote.jpg", "img/Roegadyn.jpg");

let num = 0;

pichu.addEventListener("click", function () {
  num = 0;
  mypic.src = picbox[0];
  mypic.animate([{ opacity: "0" }, { opacity: "1" }], 1900);
})

picAur.addEventListener("click", function () {
  num = 0;
  mypic.src = picbox[1];
  mypic.animate([{ opacity: "0" }, { opacity: "1" }], 1900);
});

picEre.addEventListener("click", function () {
  num = 0;
  mypic.src = picbox[2];
  mypic.animate([{ opacity: "0" }, { opacity: "1" }], 1900);
});

picLala.addEventListener("click", function () {
  num = 0;
  mypic.src = picbox[3];
  mypic.animate([{ opacity: "0" }, { opacity: "1" }], 1900);
});

picMiko.addEventListener("click", function () {
  num = 0;
  mypic.src = picbox[4];
  mypic.animate([{ opacity: "0" }, { opacity: "1" }], 1900);
});

picRuga.addEventListener("click", function () {
  num = 0;
  mypic.src = picbox[5];
  mypic.animate([{ opacity: "0" }, { opacity: "1" }], 1900);
});