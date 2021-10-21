const mobile_menu_open_icon = document.querySelector('.nav__mobile');
const mobile_menu_close_icon = document.querySelector('.nav__close');
const nav = document.querySelector('.nav');

mobile_menu_open_icon.addEventListener("click", ()=>{
    nav.style.display = "block";
    nav.style.animationName = "menu-open"; 
})

mobile_menu_close_icon.addEventListener("click", () =>{
    setTimeout(()=>{
        nav.style.display = "none";
    },500)
    nav.style.animationName = "menu-close";
})