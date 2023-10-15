

const linkrol = document.querySelector(".marquee");

const lis1 = document.querySelector(".list1");

const lis2 = document.querySelector(".list2");

const lis3 = document.querySelector(".list3");

const lis4 = document.querySelector(".list4");

const lis5 = document.querySelector(".list5");


const litex1 = document.querySelector(".litext1");

const litex2 = document.querySelector(".litext2");

const litex3 = document.querySelector(".litext3");

const litex4 = document.querySelector(".litext4");

const litex5 = document.querySelector(".litext5");


linkrol.classList.add("marquee-inner");


lis1.addEventListener("mouseover", function () {
  litex1.classList.add("hover");
});

lis2.addEventListener("mouseover", function () {
  litex2.classList.add("hover");
});

lis3.addEventListener("mouseover", function () {
  litex3.classList.add("hover");
});

lis4.addEventListener("mouseover", function () {
  litex4.classList.add("hover");
});

lis5.addEventListener("mouseover", function () {
  litex5.classList.add("hover");
});


lis1.addEventListener("mouseleave", function () {
  litex1.classList.remove("hover");
});

lis2.addEventListener("mouseleave", function () {
  litex2.classList.remove("hover");
});

lis3.addEventListener("mouseleave", function () {
  litex3.classList.remove("hover");
});

lis4.addEventListener("mouseleave", function () {
  litex4.classList.remove("hover");
});

lis5.addEventListener("mouseleave", function () {
  litex5.classList.remove("hover");
});

