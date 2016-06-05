document.write("<h1>Welcome to Rand Radness!</h1>");


function getRandomNumber(upper) {
	var randomNumber = Math.floor(Math.random() * upper) + 1;
	return randomNumber;
}

console.log(getRandomNumber(6));
console.log(getRandomNumber(10));
console.log(getRandomNumber(16));
console.log(getRandomNumber(20));
console.log(getRandomNumber(4));


/* function to calculate the area of a rectangle
   formula for this:
   area = length * width
*/

function calcRectArea(length,width,unit) {
 	// check to ensure only numbers given as arguments
 	if(isNaN(length) || isNaN(width)) {
 		if(isNaN(length)) {
 			notNum = length;
 		}
 		else {
 			notNum = width;
 		}
 		alert('Only numbers can be given as arguments. "' + notNum +'" is not a number. Please try again.');
 	}
	var rectArea = length * width;
	return rectArea + ' ' + unit;
}

myRectangle = calcRectArea('myBalls',10,'sq inches');
console.log('My rectangle has an area of: ' + myRectangle);

function max(arg1, arg2) {
  var bigger;
  if(arg1 > arg2) {
    bigger = arg1;  
  } else {
    bigger = arg2;  
  }
  return bigger;
}

var bigBoy = max(15,10);
alert('The bigger number is ' + bigBoy);

/* Number guessing name where the user is
   asked to guess a number between 1 & 6.  If
   his first guess is wrong he is given a hint
   that the number guessed is either higher
   or lower than the number.
   */


// var correctGuess = false;
// var randomNumber = Math.floor(Math.random() * 6) + 1;
// var guess = prompt("I am thinking of a number between 1 and 6.  What is it?");
// if ( parseInt(guess) === randomNumber) {
// 	correctGuess = true;
// } else if ( parseInt(guess) < randomNumber) {
// 	var guessMore = prompt("Try again.  The number I am thinking of is bigger than " + guess + ".");
// 	if (parseInt(guessMore) === randomNumber) {
// 		correctGuess = true;
// 	}
// } else if (parseInt(guess) > randomNumber) {
// 	var guessMore = prompt("Try again.  The number I am thinking of is smaller than " + guess + ".");
// 	if (parseInt(guessMore) === randomNumber) {
// 		correctGuess = true;
// 	}
// }
// if (correctGuess){
// 	document.write('<p>You guessed the number!</p>');
// } else {
// 	document.write('<p>Sorry, the correct number is ' + randomNumber + '.</p>');
// }




/*
var lowerNum = prompt("Please enter a (whole, no decimals please) number for the lowest number I can produce randomly: ");
var upperNum = prompt("Please enter a (whole, no decimals please) number for the highest number I can produce randomly: ");
var lowerNumInt = parseInt(lowerNum);
var upperNumInt = parseInt(upperNum);
var lowerRadNum = Math.floor( Math.random() * lowerNumInt ) + 1;
var upperRadNum = Math.floor( Math.random() * upperNumInt ) + 1;
finalRadNum = upperRadNum - lowerRadNum;
alert("Your random number between " + lowerNumInt +" and " + upperNumInt + " is: " + finalRadNum + ".  Rad!");
*/


