/* Mastermind I - no saved turns */

/* Initialization */
//colors, code, guess, feedback -- all arrays
var colors=['r','c','w','g','b','y'];
var code=[];
var guess=[];
var feedback=[];
/* Main Method */
function main(){
	code=setCode(code,colors);

	guess=getGuess(guess);

	feedback=testGuess(guess,code,feedback);
}
/* Functions */
function setCode(code,colors){
  for(i=0; i<4; i++){
  code[i]=colors[Math.floor(Math.random()*6)]; 
  }
  console.log(code);
  return code;
}

/* Create the Secret Code */

// function pulls from six colors to randomly fill code with four values
function getGuess(guess){
/* Get the Player's Guess */
  for(i=0; i<4; i++){
guess[i]=prompt("what is your guess for position "+i);
  }
    console.log(guess);
    return guess;
  }
// function prompts player for each of four values and stores in array

/* Analyze the Guess */

// function analyzes guess against code and produces feedback
function testGuess(guess,code,feedback){
	// initialize the temporary code array (copy of code)
var tempCode=code;
	// count the blacks and erase tempcode as you go - one loop
for(g=0; g<4; g++){
    if(guess[g]==tempCode[g] && guess[g]!=""){
      feedback[g]="b";
      tempCode[g]="";
    
  }
}
	// count the whites and erase tempcode as you go - nested loops
for(g=0; g<4; g++){
  for(c=0; c<4; c++){
    if(guess[g]==tempCode[c] && guess[g]!=""){
      feedback[g]="w";
      tempCode[c]="";
      continue;
    }
   }
}

	// use "continue" once a match is found in the inner loop

	// send the feeback to the formatter
  

	// console log the feedback
console.log(feedback);
}
/* Format the Feedback */
function feedbackFormat(feedback){
// function over-writes feedback to put b's first, w's second, delete the res

	// initialize the black and white count variables
var b=0, w=0;
  for(i=0; i<4; i++){
	// write the black pegs
  if(feedback[i]=="b"){
  b++;
}
	// write the white pegs
  else if (feedback[i]=="w"){
    w++;
  }
  }
	// define remainder as 4 - blacks + whites
var remainder=4-(b+w);
	// delete the blanks in the feedback remainder with array.pop
for(i=0; i<b; i++){
  feedback[i]="b";
}
  for(i=b; i<b+w; i++){
  feedback[i]="w";
}
  for(i=0; i<remainder; i++){
  feedback.pop();
}
	// return the new feedback array
return feedback;
}