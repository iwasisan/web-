$(function () {
  $(".slider img").click(function () {
    const imgSrc = $(this).attr('src');
    $(".modal-img").attr('src', imgSrc);
    $(".modal").fadeIn();
    return false
  });

  $(".close-btn").click(function () {
    $(".modal").fadeOut();
    return false
  });
});