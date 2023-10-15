// 問題12：特定の文字列が含まれているかを判断しよう
// ① 変数 target_str を定義、"忍者CODE" を代入
// ② 関数 ninja_judge を定義
// ③ 引数 str に "忍者CODE" が含まれている場合だけアラートに「含む！」を表示

let target_str = "忍者CODE";

// https://qiita.com/shimajiri/items/a2d79d9aa1323da972f3
// JavaScriptで特定の文字列が含まれているか調べるメソッド

const result = target_str.includes('忍者');
// 忍者という文字列が含まれていたら　trueを返す。　含まれてないならfalseを返す。　
// includes() 文字列の中に特定の文字列が含まれるか判定
// https://into-the-program.com/javascript-includes/

function ninja_judge(str) {
  if (str.includes("忍者CODE")) {
    alert("忍者CODEを含む!");
  }
}

ninja_judge("fefefe");
// アラート表示なし

ninja_judge("忍者CODE");
// アラート表示される。

ninja_judge("忍者CODEですぅ。");
// アラート表示される。

ninja_judge("忍者・・CODEだな");
// アラート表示なし