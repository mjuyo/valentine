document.addEventListener('DOMContentLoaded', function() {
    // Define the elements
    const noButton = document.getElementById("noBtn");
    const yesButton = document.getElementById("yesBtn");
    const questionStr = document.getElementById("question");
    const gifBear = document.getElementById("gifs");

    // Data and initial styles
    const myList = ["Sure?", "Are you really sure??", "Please?", "Pretty please?", "I will be sad 宝贝", "I will be really sad", "Come on!"];
    let yesWidth = 250;
    let yesHeight = 115;
    let yesPadding = 20;
    let size = 50;
    let padding = 25;
    let font = 20;

    // Function for "No" button click event
    function noBtnClickEvent(obj) {
        let randomNum = Math.floor(Math.random() * myList.length);

        if (obj.innerHTML === "No" || myList.includes(obj.innerHTML)) {
            obj.innerHTML = myList[randomNum];
            yesButton.style.width = `${yesWidth + size}px`;
            yesButton.style.height = `${yesHeight + size}px`;
            yesButton.style.padding = `${yesPadding + padding}px`;
            yesButton.style.fontSize = `${font}px`;
        }
        size += 50;
        padding += 25;
        font += 6;
    }

    // Function for "YES" button click event
    function yesBtnClickEvent() {
        gifBear.src = "bear-kiss-bear-kisses.gif"; 
        yesButton.style.width = `${yesWidth}px`;
        yesButton.style.height = `${yesHeight}px`;
        yesButton.style.padding = `${yesPadding}px`;
        yesButton.style.fontSize = `${sizeFont}px`;
        questionStr.innerHTML = "Oh Yaaaay!!!";
        noButton.innerHTML = "我知道了 !";
    }

    // Attach event listeners
    noButton.addEventListener('click', function() {
        noBtnClickEvent(this);
    });

    yesButton.addEventListener('click', yesBtnClickEvent);
});
