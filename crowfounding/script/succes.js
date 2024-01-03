const finishPaymentBtn = document.querySelector(".modal__succes-btn");

finishPaymentBtn.addEventListener("click", () => {
  console.log("dsadas");
  documentBody.classList.add("layer--hidden-succes", "layer--hidden");
  documentBody.style.overflow = "auto";
  deactivateCard();
});

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
