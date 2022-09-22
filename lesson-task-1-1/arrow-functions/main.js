//* different ways to write a function

// function logMessage() {
//   console.log('Hello');
// }

// const logMessage = function () {
//   console.log('Hello');
// };

// const logMessage = (message) => console.log(message);

const logMessage = (message) => {
  console.log(message);
};

logMessage();

// const subtract = (a, b) => {
//   return a - b;
// };

const subtract = (a, b) => a - b;

console.log(subtract(17, 8));

const arr = ['blue', 'red', 'green'];

// arr.forEach(function (item) {
//     console.log(item);
//   });

arr.forEach((item) => console.log(item));

// setTimeout(() => {
//   console.log('asdasd');
// }, 1000);

setTimeout(() => console.log('asdasd'), 1000);
