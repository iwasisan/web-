
// ここにjqueryで記述していく
$(function () {
  // #で始める要素をクリックした時。
  $('.s_01 a[href^= "#"]').click(function () {
    // スクロール速度設定
    const speed = 600;
    // クリックした場所の位置を取得
    let href = $(this).attr("href");
    // 終点の場所の位置を取得、条件付き
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 終点の場所の位置の数値を取得
    let position = target.offset().top;
    // 終点の場所の位置までスムーススクロールする
    $("html,body").animate({ scrollTop: position }, speed, "swing");
    // クリックした要素だけで完結させる。
    return false;
  });
});

