// 問題10：今日の月をアラート
// ①関数 month_judge を定義
// ②引数 month が今月の月なら「今月の月です！」とアラート表示
// ③違った場合は「今月の月ではありません」とアラート表示

let today = new Date();
// Tue Jun 20 2023 11:49:18 GMT+0900 (日本標準時)
// https://www.sejuku.net/blog/22867 】日付の取得と比較の方法まとめ

let thmon = today.getMonth() + 1;
// 6
// getMonth() + 1;　+1　しないと0月からスタートする
// https://cpoint-lab.co.jp/article/201806/3635/

function month_judge(month) {
  switch (month) {
    case thmon:
      console.log("soudeu");
      alert("今月の月です！");
      break;
    default:
      console.log("no");
      alert("今月の月ではありません");
  }
}

month_judge(2);

// month_judge関数を呼ぶ、引数はスイッチ文でtoday.getMonth() + 1;（今月の月）かそれ以外かで
// 処理が変わる。入れた数字が今月の月数と同じなら（3月なら３なら）上の処理、そうじゃないなら下の処理を行う。

// https://zenn.dev/dev63/articles/9fcb8fca78065c

// https://blog.senseshare.jp/if-switch.html if文　swich文使い分け
// https://www.javadrive.jp/javascript/if/index4.html