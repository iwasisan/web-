
const pic1 = document.querySelector(".picture1");

const pic2 = document.querySelector(".picture2");

const tex1 = document.querySelector(".text1");

window.addEventListener("scroll", function () {
  const pic1top = pic1.getBoundingClientRect().top;
  const windowheight = this.window.innerHeight;

  if (pic1top - windowheight <= 0) {
    pic1.classList.add("is-active");
  }
})


window.addEventListener("scroll", function () {
  const pic2top = pic2.getBoundingClientRect().top;
  const windowheight = this.window.innerHeight;

  if (pic2top - windowheight <= 0) {
    pic2.classList.add("is-active");
  }
});


window.addEventListener("scroll", function () {
  const tex1top = tex1.getBoundingClientRect().top;
  const windowheight = this.window.innerHeight;

  if (tex1top - windowheight <= 0) {
    tex1.classList.add("is-active");
  }
});