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
        for(let i = 0; i < upperCaseArr.length; i++){
                const $imgLi = document.createElement("p");
                const $img = document.createElement("img");
                $img.src = "./src/img/star.svg";
                $imgLi.appendChild($img); 
                const $li = document.createElement("p");
                const textNode = document.createTextNode(upperCaseArr[i]);
                $li.appendChild(textNode);
                textBelt.appendChild($li);
                textBelt.appendChild($imgLi);        
        }
        
    let index = 0;
    const textBeliClone = textBelt.cloneNode(true);
    textBelt.appendChild(textBeliClone);
    setInterval(() => {
        textBelt.style.transform = `translateX(${index}px)`;
        index += -1; 
        if (index <= -textBelt.scrollWidth / 2) {
            index = 0;
        }
    }, 10);
}) 

export {textButtomUpRotate, textButtomUpOpacity, inputText}