const elem = document.querySelector(".trigger");

const tage = document.querySelector(".target");

elem.addEventListener("click", () => {
  tage.style.display = "none";
  tage.animate([{ opacity: "1" }, { opacity: "0" }], 1500);
});
// フェードインみたいにふわっと消えず、パッと消える。display = "none";だけ付与


elem.addEventListener("click", () => {
  tage.animate([{ opacity: "1" }, { opacity: "0" }], 1500).finished;
  tage.style.display = "none";
});
// 表示は変わらず　display = "none";だけ付与

elem.addEventListener("click", () => {
  
  tage.animate(
    [{ opacity: "1" }, { opacity: "0" }],
    { duration: 3000, fill: 'forwards' }
  );
  tage.animate.addEventListener("animationend", () => {
    tage.style.display = "none";
  });
});
// 表示はanimateだけ効いている。

