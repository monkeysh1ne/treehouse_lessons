var questions = 3;
var questionsLeft = "[" + questions + " questions left.]";
var adjective = prompt("Please enter an adjective (eg., fast, sturdy, sweet..): " + questionsLeft);
questions -= 1;
questionsLeft = "[" + questions + " questions left.]";
var verb = prompt("Please enter a verb (eg., ran, built, chased..): " + questionsLeft);
questions -= 1;
questionsLeft = "[" + questions + " questions left.]";
var noun = prompt("Please enter a noun (eg., programmer, watchman, nurse.." + questionsLeft);
alert("Ready to produce sentence!");
var sentence = "A " +
				adjective +
				" " +
				noun +
				" was occupied for many days while he " +
				verb +
				" his delicious creation.";
document.write(sentence);