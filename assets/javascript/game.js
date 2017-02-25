var wordList = [
	"rutabaga", 
	"dumpling", 
	"pamplemousse", 
	"teriyaki", 
	"persimmon"
]

var chosenWord = " ";
var lettersInChosenWord = [];
var numberOfBlanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];

var winCounter = 0;
var lossCounter = 1; //Why must set losses to 1 and wins to 0?
var numberOfGuesses = 9;



//Function 1

function startGame(){

numberOfGuesses = 9;
blanksAndSuccesses = [];
wrongGuesses = [];

chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
lettersInChosenWord = chosenWord.split("");
numberOfBlanks = lettersInChosenWord.length;

console.log(chosenWord);
console.log(numberOfBlanks)

for (var i = 0; i < numberOfBlanks; i++){
	blanksAndSuccesses.push("_");
}

console.log(blanksAndSuccesses);

document.getElementById("word-blank").innerHTML = blanksAndSuccesses.join(" ");
document.getElementById("guesses-left").innerHTML = numberOfGuesses;


}

//Function 2

function checkLetters(letter){

	var letterInWord = false;

	for (var i = 0; i < numberOfBlanks; i++){
		if (chosenWord[i] === letter){
			letterInWord = true;
		}
	}

	if (letterInWord){

		for (i = 0; i < numberOfBlanks; i++){
			if (chosenWord[i] === letter){
			blanksAndSuccesses[i] = letter;

			}

		}

		}else{
			numberOfGuesses --;
			wrongGuesses.push(letter)
		}

	}

//To check if a letter is already in the wrong guesses array, what we want to do is
//set up an if/else conditional that will run a for loop that will iterate over all
//the letters and then use the if/else to check if it already exists.


//Function 3

function roundComplete(){


document.getElementById("word-blank").innerHTML = blanksAndSuccesses.join(" ");
document.getElementById("guesses-left").innerHTML = numberOfGuesses;
document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

if(lettersInChosenWord.join(" ") === blanksAndSuccesses.join(" ")){
	winCounter++;
	document.getElementById("win-counter").innerHTML = winCounter;
	alert("You won!");
	startGame();

}else if(numberOfGuesses === 0){
	document.getElementById("loss-counter").innerHTML = lossCounter++;
	document.getElementById("wrong-guesses").innerHTML = "";
	alert("You're done.");
	startGame();

	}
}

// Calling fxn

startGame();

document.onkeyup = function(event){

	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

	checkLetters(letterGuessed)

	roundComplete();

}

//final issues:  losses count starts at 0.
//can guess same letter multiple times.
//When win, does not show final letter guessed in word/



















//set time out