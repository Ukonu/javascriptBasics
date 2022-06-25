// FIRST TASK

alert("Name: Glory Ukonu\nCountry: Nigeria\nHeight: 5.74");

//BASIC ARITHMETIC CALCULATOR TASK

let usernumber = parseInt(prompt("Input first number"));
operator = prompt("Select operatio: +, -, /, *");
let usernumber2 = parseInt(prompt("Input second number"));

if (operator == "+") {
  alert("Hurrayyyyy!!!🎉\nYour answer is " + (usernumber + usernumber2));
} else if (operator == "-") {
  alert("Hurrayyyyy!!!🎉\nYour answer is " + (usernumber - usernumber2));
} else if (operator == "/") {
  alert("Hurrayyyyy!!!🎉\nYour answer is " + usernumber / usernumber2);
} else if (operator == "*") {
  alert("Hurrayyyyy!!!🎉\nyour answer is " + usernumber * usernumber2);
} else {
  alert("Ooops😒🤨\nChoose a valid operator");
}
