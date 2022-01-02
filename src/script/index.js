const openMenuBtn = document.getElementById("open-menu");
const mobileNavigation = document.querySelector(".mobile-nav");
const hero = document.querySelector(".hero");
const mobileNavMenu = document.querySelector(".mobile-nav-menu");

openMenuBtn.addEventListener("click", () => {
  mobileNavigation.classList.toggle("mobile-nav-menu-open");
  hero.classList.toggle("mobile-nav-menu-open");
  document.querySelector("body").classList.toggle("mobile-nav-menu-open");
});

window.addEventListener("load", () => {
  window.scrollY = 0;
});
