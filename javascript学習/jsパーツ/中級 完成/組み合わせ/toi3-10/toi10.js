// 名前入力画面
// 文字カウント、特定の文字を省く、小文字→大文字の変換、終わったら表示

let name1 = document.querySelector(".nameset");

let inp = document.querySelector("input");

let btn = document.querySelector(".btnn");

let btn2 = document.querySelector(".btnn2")

inp.addEventListener("keyup", function () {
  name1.textContent = inp.value;
  if (name1.textContent.length >= 6) {
    alert("入力は6文字までです。");
  }
});

inp.addEventListener("blur", function () {
  if (name1.textContent.includes("@")) {
    alert("表示出来ない文字が含まれています。")
  } else if (name1.textContent.includes("/")) {
    alert("表示出来ない文字が含まれています。");
  }
})

btn2.addEventListener("click", function () {
  name1.textContent = inp.value.toUpperCase();
})

btn.addEventListener("click", function () {
  if (name1.textContent.length >= 6) {
    alert("入力は6文字までです。");
  } else if (name1.textContent.includes("@")) {
    alert("表示出来ない文字が含まれています。");
  } else if (name1.textContent.includes("/")) {
    alert("表示出来ない文字が含まれています。");
  } else {
    alert("あなたの名前は" + name1.textContent + "ですね？");
    name1.classList.add("nameresult");
  }
})