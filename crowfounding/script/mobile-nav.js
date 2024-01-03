const toggleMenu = document.querySelector(".navigation__open-menu");
toggleMenu.addEventListener("click", (e) => {
  e.target.parentElement.classList.toggle("mobile-menu");
});
