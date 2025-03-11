const textButtomUpRotate = (()=> {
    const targetTexts = document.querySelectorAll(".text-buttom-up-rotate");
    targetTexts.forEach((targetText, index) => {
        setTimeout(() => {
            targetText.classList.add("active");
        }, 1000 * (index + 1))
    })

   
})

const textButtomUpOpacity = (() => {
    const targetTexts = document.querySelectorAll(".section__about-us .text-buttom-up-opacity");
    window.addEventListener("wheel", () => {
        const aboutTopRect = document.querySelector(".section__about-us").getBoundingClientRect().top;
        if(aboutTopRect < 1000){
            targetTexts.forEach((targetText, index) => {
                setTimeout(() => {
                    targetText.classList.add("active");
                }, 500 * (index + 1))
            })
        }
    }) 
})

export {textButtomUpRotate, textButtomUpOpacity}