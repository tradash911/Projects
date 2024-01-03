////Menu
const openMenu = document.querySelector(".header__open-menu-icon");
const closeMenu = document.querySelector(".header__close-menu-icon");
const navbar = document.querySelector(".header__navbar");
const headerNav = document.querySelector(".header__logo");
const layer = document.querySelector(".layer");
const body = document.querySelector("body");

openMenu.addEventListener("click", () => {
  navbar.classList.add("mobile-menu");
  layer.classList.add("layer-active");
  body.style.overflowY = "hidden";
});

closeMenu.addEventListener("click", () => {
  navbar.classList.remove("mobile-menu");
  layer.classList.remove("layer-active");
  body.style.overflowY = "auto";
});

layer.addEventListener("click", () => {
  navbar.classList.remove("mobile-menu");
  layer.classList.remove("layer-active");
  body.style.overflowY = "auto";
});
