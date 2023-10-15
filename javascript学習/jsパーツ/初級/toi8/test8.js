// 問題8：クラスを追加しよう


let elem = document.querySelector('p');

elem.classList.add("is-active");
// 問題点、参考によると適用されるのはこの書き方だとp要素が2つ以上あった際、2番目以降は
// 適用されないはず（クラスが追加されない）
// 多分elemの中に1番目のp要素がしか入ってないからかと思う。


// querySelector　任意のHTML要素を検出・取得することができるメソッド
// classList クラスを追加したり削除したり出来る
// addメソッド HTMLはclass属性が追加


let elem1 = document.getElementsByTagName("p");
elem1[0].classList.add("is-active");
// 多分elem1[0]の[0]の部分の指定がないと上手く特定出来ないんじゃないか。
// elem1 だけ　Cannot read properties of undefinedとなる


let elem2 = document.getElementsByClassName("tese");
elem2[0].classList.add("is-active");
// 上記と同じ
// elem2 だけ　Cannot read properties of undefinedとなる


let elem3 = document.getElementById("tes");
elem3.classList.add("is-active");
// これは普通に動いた。・・・多分htmlに一つしかないクラスとかタグとかっていうのが
// 見たらわかると思うけど、1つだけしかないとは思ってくれないじゃないか、1個だけでも[0]の指定がないと
// 上手く動かないのは
// idは1つだけって分かってくれてるから動くのでは。


// https://zenn.dev/harryduck/articles/e3e6c9d37e0169c05096
// getElementById、getElementsByClassName、querySelectorの違い
// https://www.javadrive.jp/javascript/dom/index3.html
// https://codeclub965.com/?p=1979

// 不明点・・html上のscriptタグの位置