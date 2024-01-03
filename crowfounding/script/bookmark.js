const toggleBookmark = document.querySelector(".cta__bookmark-btn");

toggleBookmark.addEventListener("click", () => {
  toggleBookmark.classList.toggle("cta__bookmark-active");
});
