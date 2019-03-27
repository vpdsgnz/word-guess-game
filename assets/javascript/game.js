// Problems I'm having:
    // The game won't restart if I lose.
    // I want to not accept a repeat of a key entry, so that it doesn't count twice as a guess.
    // 

wordList = [
    "pikachu",
    "squirtle",
    "eevee",
    "gengar",
    "charizard",
    "ivysaur",
    "mewtwo",
    "snorlax",
    "magikarp",
    "beedrill",
    "ekans",
    "jigglypuff",
    "meowth",
    "psyduck",
    "abra",
    "slowpoke",
    "muk",
    "goldeen",
    "jynx",
    "ditto",
    "lapras",
    "jolteon",
    "dragonair",
    "articuno"

];

var currentWord = "";
var wordLetters = [];
var numBlanks = 0;
var answer = [];
var lettersUsed = [];

var wins = 0;
var losses = 0;
var remainingGuess = 12;
var finsihedGame = false;

function startGame() {
    currentWord = wordList[Math.floor(Math.random() * wordList.length)];
    wordLetters = currentWord.split("");
    numBlanks = wordLetters.length;

    remainingGuess = 12;
    lettersUsed = [];
    answer = [];
    
    for (var i = 0; i < numBlanks; i++) {
        answer.push("_");
    }

    document.getElementById("currentWord").innerHTML = answer.join(" ");
    document.getElementById("remainGuess").innerHTML = remainingGuess;
    document.getElementById("winCount").innerHTML = wins;
    document.getElementById("lossCount").innerHTML = losses;
    document.getElementById("pressKeyTryAgain").style.cssText = "display: none";

}

function checkLetters(letter) { 

    if (event.keyCode >= 65 && event.keyCode <= 90) {

        var letterMatch = false;

        for (var i = 0; i < numBlanks; i++) {
            if(currentWord[i] == letter) {
                letterMatch = true;
            }
        }

        if (letterMatch) {
            for (var i = 0; i < numBlanks; i++) {
                if(currentWord[i] == letter) {
                answer[i] = letter;
                }
            }
        }

        else {
            lettersUsed.push(letter);
            remainingGuess--
        }
    }
    else {
        alert("Please select a letter from a to z");
    }
}

function roundComplete() {
    
    document.getElementById("remainGuess").innerHTML = remainingGuess;
    document.getElementById("currentWord").innerHTML = answer.join(" ");
    document.getElementById("lettersUsed").innerHTML = lettersUsed.join(" ");


    if (wordLetters.toString() == answer.toString()) {
        wins++;
        alert("Congrats! You guessed '" + currentWord + "' correctly. Play again?");

        document.getElementById("winCount").innerHTML = wins;
        // document.getElementById("pressKeyTryAgain").style.cssText = "display: block";

        // finsihedGame = true;

        startGame();
    }

    else if (remainingGuess == 0 ) {
        losses++;
        alert("Sorry. The correct word was '" + currentWord + "'. Play again?");

        document.getElementById(lossCount).innerHTML = losses;
        // document.getElementById("pressKeyTryAgain").style.cssText = "display: block";

        // finishedGame = true;

        startGame();
    }
}

startGame();


document.onkeyup = function(event) {
    // if(finishedGame) {
        // startGame();
        //finishedGame = false;
    // }
    // else {
        // var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        // checkLetters(userGuess);
        // roundComplete();
    // }
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(userGuess);
    roundComplete();
}