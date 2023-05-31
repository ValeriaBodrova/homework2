//task1
let name = prompt("What is your name?");

if (name === "John") {
  alert("Hello, John! How are you?");
}


//task2
let number1 = parseInt(prompt("Enter a number"));
let number2 = parseInt(prompt("Enter second number"));

let operation = prompt("Select and enter the operation: add, subtract, multiply, divide");

let sum = number1 + number2;
let difference = number1 - number2;
let product = number1 * number2;
let quotient = number1 / number2;

if (number1 > 0 && number2 > 0 && operation === "add") {
    alert(`Result: ${number1} + ${number2} = ${sum}`);
} else if (number1 > 0 && number2 > 0 && operation === "subtract"){
    alert(`Result: ${number1} - ${number2} = ${difference}`);
} else if (number1 > 0 && number2 > 0 && operation === "multiply"){
    alert(`Result: ${number1} * ${number2} = ${product}`);
} else if (number1 > 0 && number2 > 0 && operation === "divide"){
    alert(`Result: ${number1} / ${number2} = ${quotient}`);
}


//task3

let value1 = prompt("Enter value");
let value2 = prompt("Enter second value");

if (value1 === value2){
    alert("true");
} else if (value1 !== value2) {
    alert("false");
}