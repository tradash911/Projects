const buyBtn = document.querySelectorAll(".modal__card-submit-btn");
const buyInput = documentBody.querySelectorAll(".modal__card-input");
///Progressbar
const progressBar = document.querySelector(".pricing__progress-bar");
const totalMoneyDOM = document.querySelector(".pricing__money-total");
const totalBackersDOM = documentBody.querySelector(".pricing__backers-total");
let targetMoney = 100000;
let totalMoney = 89914;
let totalBackers = 5007;

function updateDOM() {
  ///Update the progressbar

  progressBar.style.width = `${(totalMoney / targetMoney) * 100}%`;
  progressBar.style.maxWidth = "100%";

  ///Update the DOM

  totalMoneyDOM.innerHTML = `$${(String(totalMoney) / 1000)
    .toFixed(3)
    .replace(".", ",")}`;

  totalBackersDOM.innerHTML = (String(totalBackers) / 1000)
    .toFixed(3)
    .replace(".", ",");
}

updateDOM();

buyBtn.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    if (buyInput[index].value >= Number(buyInput[index].dataset.min)) {
      ///Update total money amount form the input field

      totalMoney = totalMoney + Number(buyInput[index].value);
      totalBackers++;
      updateDOM();

      documentBody.classList.remove("layer--hidden-succes");
    } else {
      alert(`Minimum ${buyInput[index].dataset.min}$ please!`);
    }
  });
});

buyInput.forEach((i, index) => {
  i.addEventListener("keydown", () => {
    if (i.value === "/^d+$/") {
      console.log("dasd");
    }
  });
});
