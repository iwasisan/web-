$(function () {
  // offset、animateの組み合わせ、ボタンをおしたら任意の所までアニメーション
  // 動きとしてはスムーススクロールっぽい
  $("button").click(function () {
    var img3 = $(".img3").offset().top;
    $("html,body").animate({ scrollTop: img3 },3000,"swing");
  })

  $(window).scroll(function () {
    const scrollAmount = $(window).scrollTop();
    const windowHeight = $(window).height();
    $("li").each(function () {
      const position = $(this).offset().top;
      if (scrollAmount > position - windowHeight + 100) {
        $(this).addClass("fade-in");
      }
    })
  })
});