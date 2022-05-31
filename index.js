// Your code here
function greet() {
var response = prompt ("What is your name?");
alert ("Hello, " + response);
var age = prompt ("How old are you?");
age = parseInt(age,10);
var result = confirm ("Have you celebrated a birthday yet this year?")

// To calculate born year
var date = new Date(); 
var currentYear = date.getFullYear();

if( result = true ) {
year_born = currentYear - age;
alert("You are born in " + year_born)
} else if( result = false ) {
calculatedYear = currentYear - age - 1;
alert("You are born in " + calculatedYear)
}

}
