// Challenge to change first letter toUpperCase

var name = prompt("What's Your Name?: ");
 
var firstChar = name.slice(0,1);

var remainChar = name.slice(1,name.length);

var changed = firstChar.toUpperCase();

var finalName = changed + remainChar;

console.log(finalName);

//Dog Age To Human Age Calculator

var dogAge = prompt("What's your Dog's Age?; ");

var humanAge = (dogAge-2)*4+21; //From Maths Formula

alert("Your Dog is " + humanAge + " years old in human years");

//Days Remaining (Assume the maximum years as 100 years)

var usersAge = prompt("Your Age:");

var yearsRemaining = 100 - usersAge;

var days = yearsRemaining*365;

var months = yearsRemaining*12;

var weeks = yearsRemaining*52;

alert("You have "+days+" days that is "+weeks+" weeks that is  "+months+" months reamining to ENJOY your Life");


//BMI - Body Mass Index calculator

var weight = prompt("Enter your weight in Kg: ");
var height = prompt("Enter youur height in m: ");

var BMI = weight/(height*height);

alert("Your Bodu Mass Index is: "+BMI);

