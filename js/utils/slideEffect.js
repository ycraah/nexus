const slideEffectVertical = () => {
    const textWrapper = document.querySelector(".section__text");
    const slider = document.querySelector(".slider");
    const sliderWrapper = document.querySelector(".slider__wrapper");
    const about = document.querySelector(".section__about");
    
   
    window.addEventListener("wheel", (e) => {
        const scrollLeft = sliderWrapper.scrollLeft;
        const scrollRect = slider.getBoundingClientRect();
        const textWrapperBottomRect = textWrapper.getBoundingClientRect().bottom;
        if(textWrapperBottomRect < 0 && scrollRect.bottom > 1000){
            sliderWrapper.classList.remove("absolute--top", "absolute--bottom");
            sliderWrapper.classList.add("is-fixed");
            sliderWrapper.scrollLeft += e.deltaY;
        } else if (scrollLeft === 0 && scrollRect.top > -1000) {
            sliderWrapper.classList.remove("is-fixed", "absolute--bottom");
            sliderWrapper.classList.add("absolute--top");
        } 
    }, );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                sliderWrapper.classList.remove("is-fixed", "absolute--top");
                sliderWrapper.classList.add("absolute--bottom");
            } 
        })
    })
    observer.observe(about);
}

export { slideEffectVertical };
