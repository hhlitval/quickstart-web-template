"use strict";

const mobileNav = document.querySelector(".burger");

mobileNav.addEventListener("click", () => {
  mobileNav.classList.toggle("burger--active");
});
