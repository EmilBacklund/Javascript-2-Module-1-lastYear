// Function arguments are an important concept in JavaScript
// and is how we pass values into functions

// function declaration
function printMessage(message, message2, anotherParam) {
  console.log("I am the first message: ", message);
  console.log("I am the second message: ", message2);
  console.log("I am the third message: ", anotherParam);
}

// call/ execute the function
printMessage("Hello", "There!", "Goodbye!!");

//*NOTE: There is no limit off how many arguments you can put up in an function

function sum(firstNumber, secondNumber) {
  const result = firstNumber + secondNumber;
  return result;
}

console.log(sum(5, 24));
