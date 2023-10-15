// 100pxを境にTOPに戻るボタンの表示・非表示を切り替える
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#page-top").fadeIn();
    } else {
      $("#page-top").fadeOut();
    }
  });
});