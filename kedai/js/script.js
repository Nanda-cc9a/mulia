// togle class active

const navbarNav = document.querySelector(".navbar-nav");

// ketika menu di klick

document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klick di luar side bar untuk menghilangkan nav

const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
