const navClassToggle = (() => {
    const menuItems = document.querySelectorAll(".header__menu-item");
    for(let i = 0; i < menuItems.length; i++){
        menuItems[i].addEventListener("click", function(){
            menuItems.forEach((menuItem) => menuItem.classList.remove("item-active"));
            menuItems[i].classList.add("item-active");
        })
    }
    const sliderWrapper = document.querySelector(".slider__wrapper");
    setTimeout(() => {
        sliderWrapper.classList.add("active");
    }, 1000);
});


export {navClassToggle};