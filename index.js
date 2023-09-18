var numberOfDrums = document.querySelectorAll(".drum").length;

//loop to apply event listeners to each object in the .drum class (there are 7)
for(var i = 0; i < numberOfDrums; i++ ){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
            //when we interact with specific drum, activate the following functions:
         playSound(buttonInnerHTML);

         buttonAnimation(buttonInnerHTML);
    });
}

//applying a keydown eventListener
document.addEventListener("keydown", function(event) {
    //will trigger the functions below and will pass on the key information 
    playSound(event.key);
    buttonAnimation(event.key);
});


//function with switch instead of if/else block
    //using key as the case
function playSound(key){
switch (key) {
        
        case "w":
            var drumSound = new Audio('sounds/crash.mp3');
            drumSound.play();
            break;
        
        case "a":
            var drumSound = new Audio('sounds/kick-bass.mp3');
            drumSound.play();
            break;

        case "s":
            var drumSound = new Audio('sounds/snare.mp3');
            drumSound.play();
            break;
        
        case "d":
            var drumSound = new Audio('sounds/tom-1.mp3');
            drumSound.play();
            break;

        case "j":
            var drumSound = new Audio('sounds/tom-2.mp3');
            drumSound.play();
            break;
        
        case "k":
            var drumSound = new Audio('sounds/tom-3.mp3');
            drumSound.play();
            break;

        case "l":
            var drumSound = new Audio('sounds/tom-4.mp3');
            drumSound.play();
            break;     
            
        default: console.log(buttonInnerHTML);

        }
}

//animation adding and removing css by updating the classList property
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    //will remove property and return to original styling.
    //speed makes it appear animated
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}