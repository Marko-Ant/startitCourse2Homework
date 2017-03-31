// initialize some vars that will be used across multiple functions
var randomizator;
var computersRandom;

// get img elements to replace src later on
var fetchChoice = document.getElementById("playerHand");
var fetchHand = document.getElementById("computerHand");

// prepare messages which will be appended after the random function
var itsADraw = document.createElement("p");
var youWin = document.createElement("p");
var youLose = document.createElement("p");
var dText = document.createTextNode("It's a draw! Try again.")
var wText = document.createTextNode("You win! Stupid game ...")
var lText = document.createTextNode("You lose! Better luck next time!")
itsADraw.appendChild(dText);
youWin.appendChild(wText);
youLose.appendChild(lText);
var textParent = document.getElementById("textResultParent");
var textChild;

// get the flavor randomization animation for the computer hand before
// the player clicks anything once the page loads
function flow() {
  randomizator = setInterval(functRandom, 250);
};

function functRandom() {

	var result = Math.random();
	if (result < 0.33) {
		result = "rock"
	}

	else if (result <= 0.66) {
		result = "paper";
	}

	else {
		result = "scissors";
	}

	if ( result == "rock") {
		fetchHand.src="assets/img/computer1Rock.png";
	}
	else if ( result == "paper") {
		fetchHand.src="assets/img/computer1Paper.png";
	}
	else {
		fetchHand.src="assets/img/computer1Scissors.png";
	}

};

// init the flavor randomization
flow();

// adding an event listener to all 3 of the buttons through 
// the bubbling principle, stopPropagation stops it from going too high
var buttonRow = document.querySelector("#buttons");
buttonRow.addEventListener("click", iChoose, false);


function iChoose(e) {

	clearInterval(randomizator);


    if (e.target !== e.currentTarget) {
        
        var clickedItem = e.target.id;

        computersRandom = Math.random();

		if (computersRandom < 0.33) {
			computersRandom ="rock";
			fetchHand.src="assets/img/computer2Rock.png";
		}
		else if (computersRandom <= 0.66) {
			computersRandom = "paper";
			fetchHand.src="assets/img/computer2Paper.png";
		}
		else {
			computersRandom = "scissors"
			fetchHand.src="assets/img/computer2Scissors.png";
		}


		if (clickedItem == computersRandom) {
			textChild = document.getElementById("textResultParent").childNodes[0];
			textParent.replaceChild(itsADraw,textChild);
		}

		else if (clickedItem == "paper") {

			if (computersRandom == "scissors") {
				textChild = document.getElementById("textResultParent").childNodes[0];
				textParent.replaceChild(youLose,textChild);
			}
			else {
				textChild = document.getElementById("textResultParent").childNodes[0];
				textParent.replaceChild(youWin,textChild);
			}
		}

		else if (clickedItem == "rock") {

			if (computersRandom == "paper") {
				textChild = document.getElementById("textResultParent").childNodes[0];
				textParent.replaceChild(youLose,textChild);
			}
			else {
				textChild = document.getElementById("textResultParent").childNodes[0];
				textParent.replaceChild(youWin,textChild);
			}
		}

		else {

			if (computersRandom == "rock") {
				textChild = document.getElementById("textResultParent").childNodes[0];
				textParent.replaceChild(youLose,textChild);
			}
			else {
				textChild = document.getElementById("textResultParent").childNodes[0];
				textParent.replaceChild(youWin,textChild);
			}
		}

		// added image changing for player's hand here, because I'm dumb
		switch (clickedItem) {
			case "rock":
				fetchChoice.src="assets/img/player2Rock.png"
				break;
			case "paper":
				fetchChoice.src="assets/img/player2Paper.png"
				break;
			case "scissors":
				fetchChoice.src="assets/img/player2Scissors.png"
				break;

		};

	}

	e.stopPropagation();
};