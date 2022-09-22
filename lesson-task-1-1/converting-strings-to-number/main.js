//!Converting strings to numbers

// We can use parseInt to convert string holding an integer value to a number
// and parseFloat to convert a string holding a number with decimal places in it.

const resultOne = 3 + parseInt("1");
const resultTwo = 3 + parseFloat("1.2");

console.log(resultOne);
console.log(resultTwo);

const myNumber = "5";
const parsedValue = parseInt(myNumber);
console.log(parsedValue);

const myString = "hej5hej";
console.log(parseInt(myString[3]));

//*NOTE: if you parseFloat or parseInt letters, you get NaN = Not a Number
