// function to change the new webp picture format do not delete=========================================
function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});
// function to change the new webp picture format do not delete=========================================

// main slider =======================================

$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    appendDots: $(".menu-inner"),
    speed: 1000,
    easing: "ease",
    infinite: false,
    initialSlide: 0,
  });
  $(".page-three__slider").slick({
    vertical: true,
    verticalSwiping: true,
    speed: 1000,
    easing: "ease",
    initialSlide: 0,
  });
});

// main slider ====================================

// burger - menu ==================================

let menu = document.querySelector(".menu-burger");
let inner = document.querySelector(".menu-inner");
let span = document.querySelector("span");

menu.addEventListener("click", function () {
  inner.classList.toggle("active__menu");
});

menu.addEventListener("click", function () {
  span.classList.toggle("active");
});

// burger - menu =========================

// tabs ==================================

let tab = function () {
  let tabNav = document.querySelectorAll(".tabs-nav__item"),
    tabContent = document.querySelectorAll(".tab"),
    tabName;

  tabNav.forEach((item) => {
    item.addEventListener("click", selectTabNav);
  });

  function selectTabNav() {
    tabNav.forEach((item) => {
      item.classList.remove("is-active");
    });
    this.classList.add("is-active");
    tabName = this.getAttribute("data-tab-name");
    selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
    tabContent.forEach((item) => {
      item.classList.contains(tabName)
        ? item.classList.add("is-active")
        : item.classList.remove("is-active");
    });
  }
};
tab();

// tabs =================================
