// 問題1：ウィンドウの横幅を変数に入れよう


// WebブラウザはHTMファイルを受信すると、表示する前にDOMツリーを作成
// DOMツリーとはHTMLファイル内のタグや属性、データなど全ての情報を階層的に管理するために作成されたデータ
// DOM(Document Object Model)は、DOMツリーをプログラムで操作するためのAPI
// JavaScriptでDOMのAPI(各種関数)を利用してDOMツリーを修正出来る。


// document.write() htmlに文字列を表示できる。（）内に表示したい文字列を指定。
document.write("samurai");

// alert();     ( )内に引数を指定するとポップアップ表示させる事が出来る。文字列、数値どっちも可
alert(1222);

// 変数monitorWを再代入とか考えてないのでconstで設定
// window.screen.width　モニタのサイズ　幅を取得　screen.widthも同じ数値だった。
// モニターサイズ幅をmonitorWに代入
const monitorW = window.screen.width;

// alert();で表示
alert(monitorW);

// 表示の順番はalert();のポップアップが先に上から順に表示され、それを消してから
// document.write("samurai");が表示された。

// 参考サイト　https://dubdesign.net/javascript/screen-alert/
// https://uxmilk.jp/28500
// https://www.sejuku.net/blog/29821


// document.getElementById()関数　使う時に再度調べる。何かすごそう
// https://ict-skillup.com/javascript/843/#toc1