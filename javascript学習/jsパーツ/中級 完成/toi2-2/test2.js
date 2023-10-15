// 問題2：カラーピッカーで取得した色を反映させよう

const inputcolor = document.getElementById("color-change");

const result = document.getElementsByClassName("title");
result[0];
// resultだけだとhtmlcollection　[0]を付けるとh1要素が指定出来る。

inputcolor.value;
// 内容はカラーコード　変数には入れられないっぽい
// カラーピッカーの値の取得
// Inputタグの value プロパティの値を参照
// これもコンソールで見ると、カラーコードが変化するタイミングはピッカーで色を選択し
// ピッカーを閉じたとき、ピッカー上でクリックしたときじゃない。
// 確かにピッカーで色を選んでる時に四角い部分の色は変わるけど、その時はカラーコードを
// 取得していない。

// https://www.javadrive.jp/javascript/form/index7.html

inputcolor.addEventListener("change", function () {
  console.log(inputcolor.value);
  result[0].style.color = inputcolor.value;
  // 上記の1文だけでは反応しない。addEventListenerの前がinputcolor.valueでも意味は
  // 通じそうだけど反応しなかった。
})

// change	フォーム部品の状態が変更された時に発動
// https://www.javadrive.jp/javascript/form/index7.html

// カラーピッカーが色を所得するタイミングについての誤解があった。
// 上記の書き方だと、inputcolor:カラーピッカー（四角い部分）が変わった時
// inputcolor.value　カラーピッカーの要素：色コード　をコンソールに出す
// その色コードがresult[0]：h1要素のカラースタイルとして代入される。