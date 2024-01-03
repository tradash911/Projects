const delBtn = document.querySelectorAll(".list__del-btn");
const schedule = document.querySelector(".schedule");
const scheduleList = document.querySelector(".schedule__main");
const addToDo = document.querySelector(".schedule__header-btn");
const input = document.querySelector(".schedule__header-input");
const itemsLeft = document.querySelector(".schedule__footer-counter");
const label = document.querySelector(".schedule__main-layer");
const setBtnActive = document.querySelectorAll(".button--btn-group");
const themeSwitcher = document.querySelector(".schedule__header-switch");
const btnGroup = document.querySelectorAll(".button--btn-group ");

///DOM Theme switcher

themeSwitcher.addEventListener("click", () => {
  document.querySelector("body").classList.toggle("dark-mode");
  themeSwitcher.classList.add("pointer-events-disable");
  setTimeout(() => {
    themeSwitcher.classList.remove("pointer-events-disable");
  }, 1000);
});

/// Template for the new items

function template() {
  return `<div class="schedule__main-item active">
  <div class="schedule__main-toggle-btn">
    
    <span class="schedule__main-layer"></span>
    </div>
  <p class="schedule__main-text">${input.value}</p>
  <button
    class="button schedule__main-del-btn button--del-btn">
  </button>
  </div>`;
}

///Add a new item to the list

addToDo.addEventListener("click", (e) => {
  e.preventDefault();

  if (input.value.length >= 1) {
    scheduleList.innerHTML += template();
    console.log(input.value);
    input.value = "";
    itemsLeft.innerHTML = ` ${
      document.querySelectorAll(".active").length
    } items left`;
  }

  ///Set active state for button called 'All'

  btnGroup.forEach((i) => i.classList.remove("btn-active"));
  btnGroup[0].classList.add("btn-active");

  ///Remove all 'hidden' class from items when you add a new item

  document.querySelectorAll(".schedule__main-item").forEach((i) => {
    i.classList.remove("hidden");
  });
});

/// Check completed button and display items left

schedule.addEventListener("click", (e) => {
  if (e.target.classList.contains("schedule__main-toggle-btn")) {
    e.target.classList.toggle("hide-layer");
    e.target.parentElement.classList.toggle("completed");
    e.target.parentElement.classList.toggle("active");
    itemsLeft.innerHTML = ` ${
      document.querySelectorAll(".active").length
    } items left`;
  }

  ///show completed

  if (e.target.classList.contains("schedule__footer-view-completed")) {
    document.querySelectorAll(".schedule__main-item").forEach((i) => {
      i.classList.remove("hidden");
      if (!i.classList.contains("completed")) {
        i.classList.add("hidden");
      }
    });
  }

  //Show only active

  if (e.target.classList.contains("schedule__footer-view-active")) {
    document.querySelectorAll(".schedule__main-item").forEach((i) => {
      i.classList.remove("hidden");
      if (i.classList.contains("completed")) {
        i.classList.add("hidden");
      }
    });
  }

  ///Show all

  if (e.target.classList.contains("schedule__footer-view-all")) {
    document.querySelectorAll(".schedule__main-item").forEach((i) => {
      i.classList.remove("hidden");
    });
  }

  ///Delete list item

  if (e.target.classList.contains("schedule__main-del-btn")) {
    e.target.parentElement.classList.add("delete-animation");

    if (e.target.parentElement.classList.contains("completed")) {
      setTimeout(() => e.target.parentElement.remove(), 500);
    } else {
      setTimeout(() => e.target.parentElement.remove(), 500);
      itemsLeft.innerHTML = ` ${
        document.querySelectorAll(".active").length - 1
      } items left`;
    }
  }

  ///Delete ALL completed

  if (e.target.classList.contains("schedule__footer-clear-btn")) {
    console.log("del");
    document.querySelectorAll(".completed").forEach((i) => {
      i.classList.add("delete-animation");
      ///Remove item after animations ends
      setTimeout(() => i.remove(), 1000);
    });
  }
});

/// Set active state for the bottom buttons

setBtnActive.forEach((i) => {
  i.addEventListener("click", () => {
    btnGroup.forEach((i) => {
      i.classList.remove("btn-active");
    });
    i.classList.add("btn-active");
  });
});
