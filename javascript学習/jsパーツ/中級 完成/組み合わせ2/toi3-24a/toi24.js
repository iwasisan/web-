
const line1 = document.querySelector(".underline-before1");

const line2 = document.querySelector(".underline-before2");

const line3 = document.querySelector(".underline-before3");

const line4 = document.querySelector(".underline-before4");


window.addEventListener("scroll", function () {
  let line1top = line1.getBoundingClientRect().top;
  
  let wh = window.innerHeight;

  if (line1top - wh <= 10) {
    line1.classList.add("after1");
  }
})

window.addEventListener("scroll", function () {
  let line2top = line2.getBoundingClientRect().top;

  let wh = window.innerHeight;

  if (line2top - wh <= 10) {
    line2.classList.add("after2");
  }
});


window.addEventListener("scroll", function () {
  let line3top = line3.getBoundingClientRect().top;

  let wh = window.innerHeight;

  if (line3top - wh <= 10) {
    line3.classList.add("after3");
  }
});

window.addEventListener("scroll", function () {
  let line4top = line4.getBoundingClientRect().top;

  let wh = window.innerHeight;

  if (line4top - wh <= 10) {
    line4.classList.add("underline-before4-a");
  }
});