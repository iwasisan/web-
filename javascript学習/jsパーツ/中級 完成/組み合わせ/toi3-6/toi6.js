// [26]リサイズされたら横幅を取得,[6]配列から値を取得しよう
// [12]特定の文字列が含まれているかを判断しよう
// [14]配列から3番目の値を取得しよう

// リサイズしたX距離、Y距離を取得　し測定結果を記録・復元できるもの
// 上手く配列に出来なかった・・ｓ


let rewidth = document.querySelector(".val1");

let reheight = document.querySelector(".val2");

const cheakbtn = document.querySelector(".point");

window.addEventListener("resize", function () {
  rewidth.textContent = window.innerWidth;
})

window.addEventListener("resize", function () {
  reheight.textContent = window.innerHeight;
})



let n = 0;

cheakbtn.addEventListener("click", function () {
  n++;
  console.log([rewidth.textContent, reheight.textContent, n]);
})

  // window.resizeTo(300, 300);




