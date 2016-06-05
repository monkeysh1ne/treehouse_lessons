/* A quiz which asks 5 questions,
after the questions have been answered tells
the player how many questions he got right,
then awards a crown (or not!) dependant on
the number of questions answered correctly
*/

// create var to hold number of correct answers and initial to zero
var correctAnswers = 0;
award = 'nothing';

var a1 = prompt('What color are my eyes?');
if (a1 === 'green') {
	correctAnswers += 1;
	}
var a2 = prompt('What is my favourite forest park?');
if (a2.toUpperCase() === 'TARARUAS') {
	correctAnswers += 1;
	}
var a3 = prompt('What is the meaning of life, the universe and everything?');
if (parseInt(a3) === 42) {
	correctAnswers += 1;
	}
var a4 = prompt('What\'s my favourite season?');
if (a4.toUpperCase() === 'WINTER') {
	correctAnswers += 1;
	}
var a5 = prompt('Cheese?');
if (a5.toUpperCase() === 'CHEESE' ) {
	correctAnswers += 1;
}

if (correctAnswers === 5) {
	award = 'gold crown';
} else if (correctAnswers >=3) {
	award = 'silver crown';
} else if (correctAnswers >=1) {
	award = 'bronze crown';
} else {
	award = 'nothing';
}



// tell user how many questions he got right
document.write('<h1>You answered ' + correctAnswers + ' questions correctly!</h1>');
document.write('<p>You qualify for a ' + award + '  award!</p>');