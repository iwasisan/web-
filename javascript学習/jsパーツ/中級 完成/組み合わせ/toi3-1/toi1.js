// 組み合わせ。「１」、「６」
// ウインドウ画面の縦幅、横幅を取得し、配列の形にする。
// 配列から数値を取得しアラートで表示

// 何かイメージと違う・・・多分モニターサイズ（固定）でなく
// ドラッグアンドドロップで可変するウインドウのサイズをイメージしてた・・・


let monitorW = window.screen.width;

let monetorY = window.screen.height;

let monetorsize = [monitorW, monetorY];

let size = ["大きめのモニターです", "中くらいのモニターです"];

window.addEventListener("DOMContentLoaded", function () {
  if (monitorW > "1040") {
    alert(
      "横幅は" + monitorW + "です\n" + "縦幅は" + monetorY + "です\n" + size[0]
    );
  } else {
    alert(
      "横幅は" + monitorW + "です\n" + "縦幅は" + monetorY + "です\n" + size[1]
    );
  }
})



