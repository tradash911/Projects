const openMenu = document.querySelector(".navigation__open-menu");
const closeMenu = document.querySelector(".navigation__close-menu");
const menu = document.querySelector(".navigation");
const layer = document.querySelector(".layer");
const body = document.querySelector("body");
openMenu.addEventListener("click", () => {
  menu.classList.remove("hide-nav");
  layer.classList.remove("hide-layer");
  body.style.overflowY = "hidden";
  body.style.height = "100dvh";
});

closeMenu.addEventListener("click", () => {
  menu.classList.add("hide-nav");
  layer.classList.add("hide-layer");
  body.style.overflowY = "scroll";
  body.style.height = "auto";
});

layer.addEventListener("click", () => {
  layer.classList.add("hide-layer");
  menu.classList.add("hide-nav");
  body.style.height = "auto";
  console.log("Dsadas");
});
