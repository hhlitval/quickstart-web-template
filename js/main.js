"use strict";
const burgerMenu = document.querySelector(".burger"),
  nav = document.querySelector(".header-nav"),
  navList = document.querySelector(".header-nav__list"),
  currentYear = document.querySelector(".year");

// Mobile navigation
burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("open");
  nav.classList.toggle("mobile-nav");
  navList.classList.toggle("active");
});

//Sticky header & goToTop button
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header"),
    hero = document.querySelector(".hero"),
    backToTop = document.querySelector(".back-to-top");
  let triggerHeight = hero.offsetHeight - 170;

  if (window.scrollY > triggerHeight) {
    header.classList.add("header-sticky");
    backToTop.classList.add("reveal");
  } else {
    header.classList.remove("header-sticky");
    backToTop.classList.remove("reveal");
  }
});

//Display current year in footer
currentYear.textContent = new Date().getFullYear();
