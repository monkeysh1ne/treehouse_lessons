// document.write("<h1>Welcome to Javascript Basics Tutorial!</h1>");
// console.log("Program fin.  And this console stuff still works.");
// var message = "Hello!";
// alert(message);
// message = "Welcome to Javascript basics!";
// alert(message);
// document.write("<h1>Using the prompt() command</h1>");
// var visitorName = prompt("Please enter your name: ");
// var message = "Hello, ";
// // alert(message + visitorName + "!");
// document.write("<h2>" + message + visitorName + "</h2>");
// message += visitorName + ". It's great to see you back with us!";
// document.write(message);
// var strLength = message.length;
// document.write("<p>Message length: " + strLength + ".</p>");
// document.write("<p>LowerCase: " + message.toLowerCase() + ".</p>");
// document.write("UpperCase: " + message.toUpperCase() + ".</p>");
// var characterPos = prompt("Enter number for character position between 0 and " + (visitorName.length - 1) + " : ");
// document.write("<p>Character at position " + characterPos + " is: " + visitorName.charAt(characterPos) + "</p>");




 // * Getting into loops...
//  ***********************

// var whatSize = prompt("Type in 'u' for UPPERCASE, or 'l' for lowercase: ");
// if(whatSize != ('u' || 'l')

var secondsPerMinute = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;
var yearsAlive = 49;
var aliveSeconds = yearsAlive * weeksPerYear * daysPerWeek * hoursPerDay * minsPerHour * secondsPerMinute;
var secondsPerDay = secondsPerMinute * minsPerHour * hoursPerDay;
// document.write("Seconds in a day: " + secondsPerDay);
document.write("I've been alive more than " + aliveSeconds + " seconds!")