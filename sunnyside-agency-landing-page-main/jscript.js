const openMenu = document.querySelector(".open-menu");
const navigation = document.querySelector(".navigation");
const menu = document.querySelector(".main-menu");
openMenu.addEventListener("click", () => {
  menu.classList.toggle("hide");
});
