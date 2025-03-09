const slideEffect = () => {
    const slider = document.querySelector(".section__slider");

    window.addEventListener("wheel", (e) => {
        const scrollLeft = slider.scrollLeft;
        const currentScroll = Math.round(scrollLeft + slider.clientWidth);
        const maxScroll = slider.scrollWidth;
        const sliderTopRect = slider.getBoundingClientRect().top;
        // console.log(`sliderTopRect : ${sliderTopRect}`);
        // console.log(`currentScroll : ${currentScroll}`);
        // console.log(`maxScroll : ${maxScroll}`);
        console.log(`sliderTopRect : ${sliderTopRect}`);
        if(e.deltaY > 1){
            if (currentScroll < maxScroll){
                e.preventDefault();
                slider.scrollLeft += e.deltaY;
            }
            else return;
        } else {
            if(scrollLeft !== 0 && sliderTopRect >= 0){
                e.preventDefault();
                slider.scrollLeft += e.deltaY;
            } else return;
        }
    }, { passive: false });
}

export { slideEffect };
