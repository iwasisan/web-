$(function () {
  $("p").hover(
    function () {
      $(this).animate({ opacity: 0.6 }, 300);
    },
    function () {
      $(this).animate({ opacity: 1.0 }, 300);
    }
  );
});