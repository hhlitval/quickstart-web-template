"use strict";

const mobileNav = document.querySelector(".burger");

// mobileNav.addEventListener("click", () => {
//   mobileNav.classList.toggle("burger--active");
// });

// Mobile nav button
const burgerMenu = document.querySelector(".burger"),
  nav = document.querySelector(".header-nav"),
  navList = document.querySelector(".header-nav__list");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("open");
  nav.classList.toggle("mobile-nav");
  navList.classList.toggle("active");
  // document.body.classList.toggle("no-scroll");
});
