const textButtomUpRotate = (()=> {
    const targetTexts = document.querySelectorAll(".text-buttom-up-rotate");
    setTimeout(() => {
        targetTexts.forEach((targetText) => {
            targetText.classList.add("active");
        })
    }, 3000)
   
})

export {textButtomUpRotate}