document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const noButton = document.getElementById("noBtn");
    const yesButton = document.getElementById("yesBtn");
    const questionStr = document.getElementById("question");
    const gifBear = document.getElementById("gifs");

    // Data and initial styles
    const myList = ["Sure?", "Are you really sure??", "Please?", "Pretty please?", "I will be sad 宝贝", "I will be really sad", "Come on!"];
    let yesWidth = 200;
    let yesHeight = 100;
    let yesPadding = 20;
    let size = 40;
    let padding = 25;
    let font = 20;

    // "No" button 
    function noBtnClickEvent() {
        let randomNum = Math.floor(Math.random() * myList.length);

        if (this.innerHTML === "No" || myList.includes(this.innerHTML)) {
            this.innerHTML = myList[randomNum];
            yesButton.style.width = `${yesWidth + size}px`;
            yesButton.style.height = `${yesHeight + size}px`;
            yesButton.style.padding = `${yesPadding + padding}px`;
            yesButton.style.fontSize = `${font}px`;
        }
        size += 50;
        padding += 25;
        font += 6;
    }

    // "YES" button
    function yesBtnClickEvent() {
        gifBear.src = "bear-kiss-bear-kisses.gif"; 
        yesButton.style.width = `${yesWidth}px`;
        yesButton.style.height = `${yesHeight}px`;
        yesButton.style.padding = `${yesPadding}px`;
        yesButton.style.fontSize = `40px`;
        questionStr.innerHTML = "Oh Yaaaay!!!";
        noButton.innerHTML = "我知道了 !";
        noButton.style.fontSize = `40px`;

    }

    // Event listeners
    noButton.addEventListener('click', noBtnClickEvent);
    yesButton.addEventListener('click', yesBtnClickEvent);
});
