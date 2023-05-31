let name = prompt("What is your name?");

if (name === "John") {
  alert("Hello, John! How are you?");
}

let number1 = prompt("Enter a number");
let number2 = prompt("Enter second number");
let operation = prompt("Select and enter the operation: "+" "-" "*" "/"");

if (number1 > 0 && number2 > 0 && operation === "+") {
    alert(`"Result:" ${number1} + ${number2}`);
}