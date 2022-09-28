const numbers = [1, 3, 6, 8, 10, 13, 16];

const filteredNumbers = numbers.filter((number) => {
  if (number >= 9) {
    return true;
  }
});

console.log(filteredNumbers);
// [10, 13, 16]

const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log(evenNumbers);
// [6, 8, 10, 16]
