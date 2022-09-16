document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector("#burger-button");
  const littleMenu = document.querySelector("#little-menu");
  const subMenu = document.querySelector("#sub-menu");

  burgerMenu.style.backgroundImage = "url('asset/images/bars.svg')";

  littleMenu.addEventListener("click", () => {
    if (subMenu.style.display == "block") {
      burgerMenu.style.backgroundImage = "url('asset/images/bars.svg')";
      subMenu.style.display = "none";
    } else {
      subMenu.style.display = "block";
      burgerMenu.style.backgroundImage = "url('asset/images/xmark.svg')";
    }
  });

  littleMenu.addEventListener("mouseleave", () => {
    burgerMenu.style.backgroundImage = "url('asset/images/bars.svg')";
    subMenu.style.display = "none";
  });
});
