// Part 1: JavaScript Basics
// Variables and Data Types
let name = "Nelson Njihia";
let age = 25;
let isStudent = true;
let hobbies = ["reading", "coding", "gaming"];
let person = { firstName: "Jane", lastName: "Smith" };

console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`Person: ${JSON.stringify(person)} (Type: ${typeof person})`);

// Operators - Simple Calculator
function calculator() {
  let num1 = parseFloat(prompt("Enter the first number:"));
  let num2 = parseFloat(prompt("Enter the second number:"));
  let operation = prompt("Choose an operation (+, -, *, /):");

  if (isNaN(num1) || isNaN(num2)) {
    alert("Invalid input. Please enter valid numbers.");
    return;
  }

  let result;
  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      alert("Invalid operation. Please use +, -, *, or /.");
      return;
  }

  document.getElementById("calculator-result").textContent = `Result: ${result}`;
}

calculator();

// Functions
function greetUser(name) {
  return `Hello, ${name}! Welcome to the JavaScript assignment.`;
}
let greetingMessage = greetUser("John");
document.getElementById("dynamic-content").textContent = greetingMessage;

// Part 2: JavaScript Control Structures
// If Statements - Voting Eligibility
let userAge = parseInt(prompt("Enter your age:"));
let votingMessage;
if (userAge >= 18) {
  votingMessage = "You are eligible to vote.";
} else {
  votingMessage = "You are not eligible to vote yet.";
}
document.getElementById("voting-message").textContent = votingMessage;

// Loops - Display Numbers 1 to 10
let numberList = document.getElementById("number-list");
for (let i = 1; i <= 10; i++) {
  let listItem = document.createElement("li");
  listItem.textContent = i;
  numberList.appendChild(listItem);
}

// Part 3: Introduction to the DOM
// Selecting and Modifying HTML Elements
document.querySelector("h1").textContent = "JavaScript in Action!";
let newParagraph = document.createElement("p");
newParagraph.textContent =
  "This content was added dynamically using JavaScript.";
document.getElementById("dynamic-content").appendChild(newParagraph);
