// リロードして2秒後にアラートを出そう！

// 2秒経過という文字をアラートで表示するという動きの設定
const alertmsg = function () {
  alert("2秒経過");
}

setTimeout(alertmsg, 2000);
// setTimeoutメソッド　ある処理を一定時間後に実行するように命令することができるメソッド
  // setTimeout(処理内容, 実行タイミング);

// alertmsgで動き、何をするかを指定してる。右に2000は～秒後というディレイタイムを指定してる
// 2000で2秒


// 参考サイト　https://www.sejuku.net/blog/24540