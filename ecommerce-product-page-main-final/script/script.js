const fullImg = document.querySelectorAll(".product__full-img");
const smallImg = document.querySelectorAll(".product__small-img");
const productImage = document.querySelector(".product__images");

const nextBtn = document.querySelector(".product__next-arrow");
const backBtn = document.querySelector(".product__back-arrow");

const lightboxNextBtn = document.querySelector(".lightbox__next-arrow");
const lightboxBackBtn = document.querySelector(".lightbox__back-arrow");
const lightBox = document.querySelector(".lightbox");
const lightBoxFullImg = document.querySelectorAll(".lightbox__full-img");
const lightBoxSmallImg = document.querySelectorAll(".lightbox__small-img");

let currentIndex = 0;

///Open Lightbox gallery
fullImg.forEach((item, index) => {
  item.addEventListener("click", () => {
    cart.classList.add("hide-cart");
    lightBox.classList.add("lightbox-active");
    lightBoxFullImg.forEach((i) => i.setAttribute("hidden", true));
    lightBoxSmallImg.forEach((i) => i.classList.remove("active"));
    lightBoxFullImg[index].removeAttribute("hidden");
    lightBoxSmallImg[index].classList.add("active");
    ///Get the big image current index
    currentIndex = index;
  });
});

/// Lightbox small images navigation
lightBoxSmallImg.forEach((item, index) => {
  item.addEventListener("click", () => {
    ///Set hidden attribute for all image
    lightBoxFullImg.forEach((i) => i.setAttribute("hidden", true));
    ///Remove hidden attribute from the image with the current index
    lightBoxFullImg[index].removeAttribute("hidden");
    ///Remove active class from all image
    lightBoxSmallImg.forEach((i) => i.classList.remove("active"));
    ///Set active class for the current image
    item.classList.add("active");
    currentIndex = index;
  });
});

///Lightbox navigation logic
function galleryNavigation(small, big) {
  big.forEach((i) => i.setAttribute("hidden", true));
  big[currentIndex].removeAttribute("hidden");
  small.forEach((i) => i.classList.remove("active"));
  small[currentIndex].classList.add("active");
}

/// Lightbox navigation Next
function lightboxNextImage() {
  if (currentIndex === lightBoxFullImg.length - 1) {
    currentIndex = 0;
    galleryNavigation(lightBoxSmallImg, lightBoxFullImg);
  } else {
    currentIndex++;
    galleryNavigation(lightBoxSmallImg, lightBoxFullImg);
  }
}

/// Lightbox navigation Previous
function lightboxPreviousImage() {
  if (currentIndex === 0) {
    currentIndex = lightBoxFullImg.length - 1;
    galleryNavigation(lightBoxSmallImg, lightBoxFullImg);
  } else {
    currentIndex--;
    galleryNavigation(lightBoxSmallImg, lightBoxFullImg);
  }
}

/// Run Lightbox navigation Next
lightboxNextBtn.addEventListener("click", lightboxNextImage);

/// Run Lightbox navigation Previous
lightboxBackBtn.addEventListener("click", lightboxPreviousImage);

///Close lightbox
lightBox.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.classList.contains("lightbox-active")) {
    lightBox.classList.remove("lightbox-active");
  }
  if (e.target.classList.contains("lightbox__close-btn")) {
    lightBox.classList.remove("lightbox-active");
  }
});

///Desktop image gallery
smallImg.forEach((item, index) => {
  item.addEventListener("click", () => {
    ///Set hidden attribute for all image
    fullImg.forEach((i) => i.setAttribute("hidden", true));
    ///Remove hidden attribute from the image with the current index
    fullImg[index].removeAttribute("hidden");
    ///Remove active class from all image
    smallImg.forEach((i) => i.classList.remove("active"));
    ///Set active class for the current image
    item.classList.add("active");

    currentIndex = index;
  });
});

///Desktop next image button
nextBtn.addEventListener("click", () => {
  if (currentIndex === lightBoxFullImg.length - 1) {
    currentIndex = 0;
    galleryNavigation(smallImg, fullImg);
  } else {
    currentIndex++;
    galleryNavigation(smallImg, fullImg);
  }
});

///Desktop previous image button

backBtn.addEventListener("click", () => {
  if (currentIndex === 0) {
    currentIndex = lightBoxFullImg.length - 1;
    galleryNavigation(smallImg, fullImg);
  } else {
    currentIndex--;
    galleryNavigation(smallImg, fullImg);
  }
});
