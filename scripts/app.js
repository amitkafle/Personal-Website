const mobile_menu_open_icon = document.querySelector(".nav__mobile");
const mobile_menu_close_icon = document.querySelector(".nav__close");
const nav = document.querySelector(".nav");

mobile_menu_open_icon.addEventListener("click", () => {
  nav.style.display = "block";
  nav.style.animationName = "menu-open";
});

mobile_menu_close_icon.addEventListener("click", () => {
  setTimeout(() => {
    nav.style.display = "none";
  }, 500);
  nav.style.animationName = "menu-close";
});

window.addEventListener("resize", () => {
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  if (width > 768) {
    nav.style.display = "block";
  } 
  console.log(width);
});
