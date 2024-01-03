////Product varriable

const productName = document.querySelector(".product__title");
const productText = document.querySelector(".product__text");
const productDiscountPrice = document.querySelector(".product__price");
const productPrice = document.querySelector(".product__discount-price");
const quantityDom = document.querySelector(".product__item-quantity");
const productSmallImg = document
  .querySelector(".product__first-small-img")
  .cloneNode("false");

////Cart varriable
const cart = document.querySelector(".header__cart-products");
const checkoutBtn = document.querySelector(".header__cart-checkout-btn");
const cartItemHidden = document.querySelectorAll(".cart-item-hidden");
const openCart = document.querySelector(".header__open-cart-icon");
const addQuantity = document.querySelector(".product__add-btn");
const removeQuantity = document.querySelector(".product__remove-btn");
const buyBtn = document.querySelector(".product__buy-btn");
const cartOrderNumber = document.querySelector(".header__cart-order-number");
const deleteCart = document.querySelector(".header__cart-checkout-delete-btn");
const cartEmptyMsg = document.querySelector(".header__cart-empty-msg");
//// Cart Items
const cartProductImg = document.querySelector(".header_cart-product-img");
const cartProductName = document.querySelector(
  ".header__cart-checkout-product-name"
);
const cartProductPrice = document.querySelector(
  ".header__cart-checkout-product-price"
);
const cartTotalPrice = document.querySelector(
  ".header__cart-checkout-product-total-price"
);

////Product details
const product = {
  name: "Fall Limited Edition Sneakers",
  text: `These low-profile sneakers are your perfect casual wear companion. 
  Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer. `,
  price: 250,
  discountPrice: 125,
};
cartEmptyMsg.removeAttribute("hidden");
productName.innerHTML = product.name;
productDiscountPrice.innerHTML = product.price.toFixed(2) + "$";
productPrice.innerHTML = product.discountPrice.toFixed(2) + "$";
productText.innerHTML = product.text;
///Open the cart with the small cart icon top right

openCart.addEventListener("click", () => cart.classList.toggle("hide-cart"));

///Add quantity

addQuantity.addEventListener("click", () => quantityDom.innerHTML++);

///Remove quantity

removeQuantity.addEventListener("click", () => {
  quantityDom.innerHTML--;
  quantityDom.innerHTML < 1 ? (quantityDom.innerHTML = 1) : "";
});

///Buy button, add the items to the car
buyBtn.addEventListener("click", () => {
  ///Remove hidden attribute from all item
  document
    .querySelectorAll(".cart-item-hidden")
    .forEach((i) => i.removeAttribute("hidden"));
  cartEmptyMsg.setAttribute("hidden", true);

  ///Display the small icon with the number of the orders over the cart icon
  cartOrderNumber.classList.remove("cart-empty");
  quantity = Number(quantityDom.innerHTML);

  ///Add product details to the cart
  cartProductImg.appendChild(productSmallImg);
  cartOrderNumber.innerHTML = quantity;
  cartProductName.innerHTML = product.name;
  cartProductPrice.innerHTML = `${product.discountPrice.toFixed(
    2
  )}$ x ${quantity}`;
  cartTotalPrice.innerHTML = `$${(product.discountPrice * quantity).toFixed(
    2
  )}`;
});

///Delete items from the cart
deleteCart.addEventListener("click", () => {
  cartEmptyMsg.removeAttribute("hidden");
  cartOrderNumber.classList.add("cart-empty");
  cartOrderNumber.innerHTML = "";
  cartProductName.innerHTML = "";
  cartProductPrice.innerHTML = "";
  cartProductImg.removeChild(productSmallImg);
  document.querySelectorAll(".cart-item-hidden").forEach((i) => {
    i.setAttribute("hidden", true);
  });
});
