var buttonElement = document.getElementById("submit-guess");

window.onload = start;

var turn=1;

function start() {
    setup();
}

function setup() {
	var welcome="<h1>Welcome to Mastermind!</h1>\n<p>Here are instructions.</p>";
    var buttonElement = document.getElementById("submit-guess");
    buttonElement.innerHTML = "Start Game"; 
	var board = document.getElementById("board");
	board.innerHTML=welcome; 
    buttonElement.onclick = function () {
		startGame();
	}
}

function startGame() {
	code=setCode(colors);
	var startPlay="<h1>Code Is Set up!</h1>\n<p>Pick your four choices for your first guess.</p>"+code;
	var buttonElement = document.getElementById("submit-guess");
    buttonElement.innerHTML = "Submit color choices"; 
	var board = document.getElementById("board");
	board.innerHTML=startPlay;
	buttonElement.onclick = function () {
		newGetGuess();
	}
}

function getGuessStub() {
	var board = document.getElementById("board");
	var alertString="<h1>Mastermind</h1><p>Guess 1: r w b y || b w</p>\n<p>Guess again!</p>";
	board.innerHTML=alertString;
}

function newGetGuess() {
	var guess =[]; 
	var turn = 1;
	alert("Turn = "+turn);
	var alertString="<h1>Mastermind</h1><p>Guess "+turn+":";
	for (i=0;i<4;i++) {
		g=document.getElementById(i);
		guess[i]=g.options[g.selectedIndex].value;
	}
	alertString=alertString.concat(guess.join(" "));
	board.innerHTML=alertString;
}