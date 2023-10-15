// 問題9：クラスを削除しよう

let elem = document.querySelector(".blue");
// ドキュメント中の1番目に見つけた、クラスblueのhtml要素を取得する。つまりpタグの要素になる


elem.classList.remove('blue');
// remove()　指定した要素を削除する　今回はclassに対してremoveした。
// ()内にremoveするもの
// 文字が青くなってる要因のクラスが消えた（ようになった為？）希望の表示になった。

// https://qiita.com/t_t238/items/c1a6154fb84b9844803b

// remove() https://sossy-blog.com/useful/7316/ 他にも何か活用がありそうだけど・・