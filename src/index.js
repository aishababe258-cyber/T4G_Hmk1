// Taking input from the user and storing it in a variable called  userName.
let userName = prompt("Enter your name");
// Prompt the user for their details
//let age = prompt("Enter your age:");
let email = prompt("Enter your email:");
let age = Number(prompt("Enter your age:"));

// Check the user's age

if (age < 12) {

    alert(`Hi ${userName}, you are ${age} years old and you are too young to register. Sorry 😔😔`);

} else if (age >= 12 && age < 18) {

    alert(`Hi ${userName}, you are ${age} years old and you have limited options to register for. We will keep in touch via your email: ${email}. 👏🏽👏🏽`);

} else {

    alert(`Hi ${userName}, you are ${age} years old and you can register for any option of your choosing. We will keep in touch via your email: ${email}. 👏🏽👏🏽`);

}
// Display the information
//alert(`Hi ${userName}, you are ${age} years old and we'll keep in touch via your email: ${email}`);

// A. Store your name inside a variable and log it to the console.
let myName = "Aisha Abdul Razak";
console.log(myName);

// B. Store your age inside a variable and log it to the console.
let myAge = 22;
console.log(myAge);

// C. Add two numbers.
let addition = 10 + 5;
console.log(addition);

// D. Subtract two numbers.
let subtraction = 10 - 5;
console.log(subtraction);

// E. Divide two numbers.
let division = 10 / 5;
console.log(division);

// F. Multiply two numbers.
let multiplication = 10 * 5;
console.log(multiplication);

// G. Find the remainder of 15 % 4.
let remainder = 15 % 4;
console.log(remainder);

// H. Store a boolean value.
let isStudent = true;
console.log(isStudent);

// I. Store a number and log its type.
let myNumber = 100;
console.log(typeof myNumber);

// J. Store a string and log its type.
let myString = "Tech4Girls";
console.log(typeof myString);