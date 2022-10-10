let numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Play the Drum By Clicking the Button
for (let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });   
}


// Play the Drum Using Key Press
document.addEventListener("keypress", function (event){
    makeSound(event.key);
    buttonAnimation(event.key);
    
});


function makeSound(key) {
    let audioDrum;
    switch (key) {
        case "w":
            audioDrum = new Audio("sounds/tom-1.mp3");
            audioDrum.play();
            break;
        case "a":
            audioDrum = new Audio("sounds/tom-2.mp3");
            audioDrum.play();
            break;
        case "s":
            audioDrum = new Audio("sounds/tom-3.mp3");
            audioDrum.play();
            break;
        case "d":
            audioDrum = new Audio("sounds/tom-4.mp3");
            audioDrum.play();
            break;
        case "j":
            audioDrum = new Audio("sounds/snare.mp3");
            audioDrum.play();
            break;
        case "k":
            audioDrum = new Audio("sounds/crash.mp3");
            audioDrum.play();
            break;
        case "l":
            audioDrum = new Audio("sounds/kick-bass.mp3");
            audioDrum.play();
            break;
        default: console.log(this.innerHTML);
            break;
    };
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}