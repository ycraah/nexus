const textButtomUpRotate = (()=> {
    const targetTexts = document.querySelectorAll(".text-buttom-up-rotate");
    targetTexts.forEach((targetText, index) => {
        setTimeout(() => {
            targetText.classList.add("active");
        }, 1000 * (index + 1))
    })

   
})

export {textButtomUpRotate}