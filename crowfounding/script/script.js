const layer = document.querySelector(".layer");
const documentBody = document.querySelector("body");
const activateCard = document.querySelectorAll(".modal__card-toggle-btn");
const openModal = document.querySelectorAll(".details__card-btn");
const closeModal = document.querySelector(".modal__close-btn");
const backToProject = document.querySelector(".cta__btn");
const navigation = document.querySelector(".navigation");
backToProject.addEventListener("click", () => {
  documentBody.classList.remove("layer--hidden");
  documentBody.style.overflow = "hidden";
  ///close mobile menu before open modal
  navigation.classList.remove("mobile-menu");
});
///Form

function deactivateCard() {
  document
    .querySelectorAll(".modal__card")
    .forEach((i) => i.classList.remove("modal__card--active"));

  document
    .querySelectorAll(".modal__card-toggle-btn")
    .forEach((i) => i.classList.remove("active"));
}

///Open modal when 'select reward' button pressed

openModal.forEach((item, index) => {
  item.addEventListener("click", () => {
    documentBody.classList.remove("layer--hidden");
    documentBody.style.overflow = "hidden";

    activateCard[index + 1].classList.add("active");
    activateCard[index + 1].parentElement.classList.add("modal__card--active");
  });
});

///Close modal with close button

closeModal.addEventListener("click", () => {
  documentBody.classList.add("layer--hidden");
  documentBody.style.overflow = "auto";
  deactivateCard();
});

///Close modal with click on the layer

layer.addEventListener("click", (e) => {
  if (e.target.classList.contains("layer")) {
    documentBody.classList.add("layer--hidden");
    documentBody.style.overflow = "auto";
    deactivateCard();
  }
});

///Set active state for each card when the circle button pressed
activateCard.forEach((i) => {
  i.addEventListener("click", (e) => {
    deactivateCard();
    i.classList.add("active");
    e.target.parentElement.classList.add("modal__card--active");
  });
});
