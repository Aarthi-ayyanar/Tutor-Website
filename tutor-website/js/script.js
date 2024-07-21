document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".navbar .mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar .mobile-menu-items");

  toggleButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
});

window.addEventListener("scroll", function () {
  const navBar = document.querySelector(".navbar");

  if (window.scrollY > 0) {
    navBar.classList.add("navbar-scroll");
  } else {
    navBar.classList.remove("navbar-scroll");
  }
});
