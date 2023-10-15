// 問題15：文字列を大文字に変換する関数を作ろう
// ① 関数 my_uppercase を定義
// ② 引数 str を大文字に変換してアラートに表示

const cd = "ransu"

const de = "WORLD"

cd.toUpperCase();
// 'RANSU'  toUpperCase()メソッド　文字列を小文字から大文字に変換

de.toLowerCase();
// 'world'  toLowerCase()メソッド　文字列を大文字から小文字に変換

function my_uppercase(str) {
  console.log(str.toUpperCase());
  alert(str.toUpperCase());
}
// my_uppercase関数を作り引数にstrを設定、渡した引数
// をstr.toUpperCase()で大文字化してコンソールログに表示、アラートにも表示

// my_uppercase(8883); 今の関数だともし数字を入れたらエラーになって、この文以下の ddi とか 忍者code
// が読み込まれない。

my_uppercase("ddi");
// DDI
my_uppercase("忍者code");
// 忍者CODE　小文字の英語のみ反応

// https://www.sejuku.net/blog/62578
// https://www.javadrive.jp/javascript/string/index17.html#section2

function my_uppercase2(str2) {
  if (typeof str2 === "string") {
    alert(str2.toUpperCase());
  }
}
// ちょっと改良、引数をまず文字列かどうかif文で判定し、文字列の場合のみ
// 大文字にしてアラートに。これなら数字を入れても無視される（コンソールにエラーっぽいのでない）

my_uppercase2("jko")
my_uppercase2(222);
my_uppercase2("edc");

// https://www.paveway.info/entry/2021/08/18/javascript_isstring

// なお一部だけ大文字にする、小文字にする。その一部を指定することも可能
// https://web-engineer-wiki.com/javascript/head-big-letter/
// https://sossy-blog.com/useful/6017/
// https://www.sejuku.net/blog/50543

// substr()

