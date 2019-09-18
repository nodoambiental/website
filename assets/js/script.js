let burger_menu = document.querySelector("a.navbar-burger");

function toggleMenu() {
    document.querySelector(".burger").classList.toggle("is-active");
    document.querySelector(".navbar-menu").classList.toggle("is-active");
};

burger_menu.addEventListener("click", toggleMenu, false);