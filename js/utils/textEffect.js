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

const inputText = (() => {
    const textBeltTextArr = ["web design", "illustration", "development", "logo & branding", "mobile app design"];
    const upperCaseArr = textBeltTextArr.map(text => text.toUpperCase());
    const textBelt = document.querySelector(".section__about-us .text-belt__list");
    setInterval(()=> {
        for(let i = 0; i < upperCaseArr.length; i++){
            const $li = document.createElement("li");
            const textNode = document.createTextNode(upperCaseArr[i]);
            $li.appendChild(textNode);
            textBelt.appendChild($li);
        }
    }, 1000)
}) 

export {textButtomUpRotate, textButtomUpOpacity, inputText}