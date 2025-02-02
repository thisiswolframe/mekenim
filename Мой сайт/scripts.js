document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const menuClose = document.getElementById("menuClose");
  const mobileMenu = document.getElementById("mobileMenu");

  menuToggle.addEventListener("click", function (event) {
      event.preventDefault();
      mobileMenu.classList.add("active"); // Открываем меню
  });

  menuClose.addEventListener("click", function (event) {
      event.preventDefault();
      mobileMenu.classList.remove("active"); // Закрываем меню
  });
});
