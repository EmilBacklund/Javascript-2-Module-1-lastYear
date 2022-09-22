// While function arguments are how we send variable values into functions,
// the return statement inside a function is how we send values back out.

function multiply(num1, num2) {
  const result = num1 * num2;
  return result;
}

const functionResult = multiply(5, 16);

console.log(functionResult);

//

function calculateCommission(amount) {
  const percentage = 40;

  const commission = amount * (percentage / 100);

  return commission;
}

console.log(calculateCommission(4500));

//

function checkPassword(stringToCheck) {
  const lengthOfString = stringToCheck.length;

  if (lengthOfString >= 10) {
    return true;
  } else {
    return false;
  }
}

console.log(checkPassword("p3pp3145!?"));

passwordIsValid = checkPassword("asd");

console.log(passwordIsValid);

if (passwordIsValid) {
  // let the user register
} else {
  // inform user their password is invalid
}
