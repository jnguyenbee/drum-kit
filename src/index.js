
$("button").on("click", (function (event) {
    var key = $(event.target).text();
    makeSound(key);
}))

$("body").keydown(function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})
/*
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    // detecting button press
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var key = this.innerHTML;
        makeSound(key);
        buttonAnimation(key);
    });
}*/

//detecting key board press

/*document.addEventListener("keydown", function (event) {
    var key = event.key;
    makeSound(key);
    buttonAnimation(key);
});
*/
function makeSound(key) {
    var audio;
    switch (key) {
        case 'w':
            audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case 'a':
            audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case 's':
            audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case 'd':
            audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case 'j':
            audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case 'k':
            audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case 'l':
            audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log("unknown key")
            break;
    }
    //        audio.play();
}

function buttonAnimation(currentKey) {
    var activeBtn = document.querySelector("." + currentKey);
    activeBtn.classList.add("pressed");

    setTimeout(function () {
        activeBtn.classList.remove("pressed");
    }, 100);

}