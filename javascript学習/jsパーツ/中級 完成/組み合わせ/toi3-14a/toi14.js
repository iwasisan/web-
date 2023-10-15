let slide = document.querySelector(".slider");

let prev = document.querySelector(".prev");

let next = document.querySelector(".next");


next.addEventListener("click", nextclick);
prev.addEventListener("click", prevclick);

function nextclick() {
  if (slide.classList.contains("slider1") === true) {
    slide.classList.remove("slider1");
    slide.classList.add("slider2");

  } else if (slide.classList.contains("slider2") === true) {
    slide.classList.remove("slider2");
    slide.classList.add("slider3");

  } else if (slide.classList.contains("slider3") === true) {
    slide.classList.remove("slider3");
    slide.classList.add("slider4");

  } else {
    slide.classList.remove("slider4");
    slide.classList.add("slider1");
  }
}


function prevclick() {
  if (slide.classList.contains("slider1") === true) {
    slide.classList.remove("slider1");
    slide.classList.add("slider4");

  } else if (slide.classList.contains("slider2") === true) {
    slide.classList.remove("slider2");
    slide.classList.add("slider1");

  } else if (slide.classList.contains("slider3") === true) {
    slide.classList.remove("slider3");
    slide.classList.add("slider2");

  } else {
    slide.classList.remove("slider4");
    slide.classList.add("slider3");
  }
}








