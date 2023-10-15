// liタグの数を取得してアラートに出して見よう。

let ulElement = document.getElementsByTagName('li');
// listクラスの要素ノードを取得(以下検証ツール確認)
// HTMLCollection(5) [li, li, li, li, li]
// length: 5
// [[Prototype]]: HTMLCollection

ulElement.length;
// 5がでる。


alert("liタグの数は" + ulElement.length + "です。");
// liタグの数は5です。

alert(ulElement.length);
// 5

// 注意！htmlファイルのscriptタグの位置がulより上の時は 0 になりました。ulより下にしたら希望した動きになった。
// 多分liタグが来る前からliタグの数を数えようとした動きかもしれない。

// document.getElementsByTagName('li');、ulElement.length;は特に0とかにはならなかったし
// その為、なんで０になるのか分からなかったが、何か見てる場所が違うのかもしれない。

// document.getElementsByClassName('list');
// HTMLCollection [ul.list]
// 0: ul.list
// length: 1
// listクラスの子要素を示す・・とはならない（length: 1だし）、指定するにはもっと細かい指定が要りそう。