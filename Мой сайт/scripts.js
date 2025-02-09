// Скрипт для открытия и закрытия мобильного меню-гамбургера
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const menuClose = document.getElementById("menuClose");
  const mobileMenu = document.getElementById("mobileMenu");

  menuToggle.addEventListener("click", function (event) {
      event.preventDefault();
      mobileMenu.classList.add("active"); 
  });

  menuClose.addEventListener("click", function (event) {
      event.preventDefault();
      mobileMenu.classList.remove("active"); 
  });
});

// Скрипт открывания заднего фона для навигационного меню при скроллинге
window.addEventListener("scroll", function() {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
  } else {
      navbar.classList.remove("scrolled");
  }
});
