// It is very common in JavaScript to pass functions as arguments to other functions.
// These are often called callback functions and are executed within the receiving function.

function logArgument(someArgument) {
  console.log("The argument is a " + typeof someArgument);

  if (typeof someArgument === "function") {
    someArgument();
  } else {
    console.log("The argument is not a function");
  }
}

const myFunctionTwo = function () {
  console.log("The function is working");
};

// myFunctionTwo();

// Log: The argument is a number
logArgument(myFunctionTwo);
// Log: The argument is a function
