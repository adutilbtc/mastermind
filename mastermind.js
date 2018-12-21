/* Class Mastermind */

/* Initializations by Hasan*/
var colors=[], code=[], guess=[], feedback=[];
var turn=0;
colors = ["r","b","g","w","c","y"];
var thisTurn = [];
var turnRecords = [];

function main() {
	alert ("colors are r, c, y, w, b, g");
	code=setCode(colors);
	while (feedback[3]!="b" && guess[0]!="q"){
	turn++;
	guess=getGuess();
	feedback=testGuess(code,guess);
	turnRecords.push(addTurn(guess,feedback));
	formatTurnRecords(turnRecords);
	alert("turn and feedback "+turnRecords);	
	alert("guess "+turn+" : "+guess+" returns: "+feedback);
	}
	if(feedback[3]=="b"){
		alert("charlie you've won");
	}
	else if(guess[0]=="q"){
		alert("quitter");
	}
}
	
/* Functions */

/* Create the Secret Code by Wyatt and Ben Woods*/
function setCode(colors){
	for(var i=0; i<4; i++){
		code[i]=colors[Math.floor(Math.random()*6)];
	}
	console.log(code);
	return code;
}

/* Get a Player's Guess by BenM and Chris*/
function getGuess(){
	for(var i=0; i<4; i++){
		guess[i]=prompt("Enter a color for position "+(i+1));
	}
	//console.log(guess);
	return guess;
}

/* Analyze the Guess by Joe and Andrew and Hasan*/
function testGuess(code,guess){
	var b=0, w=0;
	var tempCode = code.slice(0);
	var tempGuess = guess.slice(0);
	for (var g=0;g<4;g++){
		if (tempGuess[g]==tempCode[g]) {
			b++;
			tempGuess[g]="";
			tempCode[g]="";
		}
	}	
	for (var g=0; g<4;g++){
		for (var c=0; c<4; c++){
			if (tempGuess[g]==tempCode[c] && tempGuess[g]!=""){
				w++;
				tempGuess[g]="";
				tempCode[c]="";
				continue;
			}
		}
	}
	//console.log("Blacks = "+b+" and Whites equals "+w);
	feedback=feedbackFormat(b,w);
	return feedback;
}
function feedbackFormat(b,w){
var feedback=[];
for(var i=0; i<b; i++){
	feedback[i]="b";
}
	for(var i=b; i<b+w;i++){
		feedback[i]="w";
	}
		//console.log("feedback is "+feedback);
		return feedback;
}	
function addTurn(guess, feedback){
	var thisTurn=[];
	var turnValues=4+feedback.length;
	for (var i=0; i<turnValues; i++){
		if (i < 4){
			thisTurn[i]=guess[i];
		}
		else if (i > 3){
			thisTurn[i]=feedback[i-4];
		}
	}
		console.log("this turn = "+thisTurn);
		return thisTurn;
	
}
function formatTurnRecords(turnRecords){
	var alertString = "";
	var thisGuess = "";
	var thisFeedback = "";
	for (var row=0;row<turn;row++) {
		alertString = alertString.concat("Guess "+(row+1)+" : ");
		thisGuess=turnRecords[row].slice(0, 4).join();
		alertString = alertString.concat(thisGuess);
		alertString = alertString.concat(" || ");
		
		thisFeedback=turnRecords[row].slice(4, turnRecords[row].length).join();
		alertString = alertString.concat("\n");
		alert(alertString); // testing purposes
	}
}


