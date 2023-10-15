// [6]配列から値を取得[16]フェードイン
// ふわっとした表示のスライドショー

const picbox = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg"];

let pic = document.querySelector(".mypic");

let num = -1;

function slidshow() {
  if (num === 3) {
    num = 0;
  } else {
    num++;
  }
  pic.src = picbox[num];
  pic.animate([{ opacity: "0" }, { opacity: "1" }], 1000);
}

//  setInterval メソッドを実行すると、指定した時間毎に繰り返し指定した関数を呼びだす

setInterval(slidshow, 2000);