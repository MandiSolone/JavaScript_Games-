// Dice Game
//refresh button 
const refreshBtn = document.getElementById("btnRefresh"); 
function handleClick() { 
    window.location.reload(); 
}
refreshBtn.addEventListener("click", handleClick);

// Dice one
var randomNumber1 = Math.floor(Math.random() * 6) + 1 ; 

var randomDiceImage = "dice_" + randomNumber1 + ".png"; 

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img") [0];

image1.setAttribute("src", randomImageSource);


// Dice two 
var randomNumber2 = Math.floor(Math.random() * 6) + 1; 

var randomDiceImage2 = "dice_" + randomNumber2 + ".png"; 

var randomImageSource2 = "images/" + randomDiceImage2; 

var image2 = document.querySelectorAll("img") [1];

image2.setAttribute("src", randomImageSource2); 


// dertemining winner announcement

if (randomNumber1 > randomNumber2) {
    document.querySelector("h3").innerHTML = "🏆 Player 1 Wins!"; 
}
else if (randomNumber1 < randomNumber2){ 
    document.querySelector("h3").innerHTML = "🏆 Player 2 Wins!"; 
}
else { 
    document.querySelector("h3").innerHTML = "🏆 Draw!"
}



// Music Game 
//Detecting Button Press 

var numberOfInstraments = document.querySelectorAll(".instrament").length;  //should be 3 items in array

for (var i = 0; i<numberOfInstraments; i++) {
    document.querySelectorAll(".instrament") [i].addEventListener("click", function(){
        
        var buttonInnerHTML = this.innerHTML; 

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML); 

    });
}

// Detecting Keyboard Down 

document.addEventListener ("keydown", function(event){ 
    makeSound(event.key);
    buttonAnimation(event.key);  

});

function makeSound(key) { 

    switch (key) {
        case "p":
            var piano = new Audio ("sounds/mixkit-cartoon-failure-piano-473.wav"); 
        piano.play();
            break;
        
        case "d":
            var drum = new Audio ("sounds/mixkit-deep-horror-drum-556.wav"); 
        drum.play();    
            break; 

        case "g":
            var guitar = new Audio ("sounds/mixkit-cool-guitar-riff-2321.wav"); 
        guitar.play();    
            break; 

        default:console.log(buttonInnerHTML)
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed"); 
    }, 100); 

}
