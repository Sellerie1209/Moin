if (document.getElementById("slider")) {
    let animationIndex = 0;
    const textElements = [
        document.getElementById("text1"),
        document.getElementById("text2"),
        document.getElementById("text3"),
        document.getElementById("text4"),
        document.getElementById("text5")
    ];
    function sliderAnimation(){
        switch(animationIndex){
            case 0:
                textElements[0].classList.replace("onpoint", "below");
                textElements[1].classList.replace("above", "onpoint");
                textElements[2].classList.replace("below", "above");
                break;
            case 1:
                textElements[1].classList.replace("onpoint", "below");
                textElements[2].classList.replace("above", "onpoint");
                textElements[3].classList.replace("below", "above");
                break;
            case 2:
                textElements[2].classList.replace("onpoint", "below");
                textElements[3].classList.replace("above", "onpoint");
                textElements[4].classList.replace("below", "above");
                break;
            case 3:
                textElements[3].classList.replace("onpoint", "below");
                textElements[4].classList.replace("above", "onpoint");
                textElements[0].classList.replace("below", "above");
                break;
            default:
                textElements[4].classList.replace("onpoint", "below");
                textElements[0].classList.replace("above", "onpoint");
                textElements[1].classList.replace("below", "above");
                break;
        }
        animationIndex ++;
        if (animationIndex > 4) {
            animationIndex = 0;
        }
    }
    setInterval(sliderAnimation, 3000);
}

// Ein Großteil des Codes wurde gesponsort von C. Kühn.