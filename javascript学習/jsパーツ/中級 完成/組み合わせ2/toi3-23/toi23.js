
const img = document.querySelector(".img1");


const imgbox = document.querySelector(".imgbox");



window.addEventListener("scroll", function () {
  const imgboxtop = imgbox.getBoundingClientRect().top;
  const windowheight = this.window.innerHeight;


  if (imgboxtop - windowheight <= 0) {
    imgbox.classList.add("imgdami");
  }
})




