const colours = ['red', 'green', 'blue', 'orange', 'yellow'];

for (let i = 0; i < colours.length; i++) {
  if (i === 3) {
    break;
  } else if (colours[i] === 'green') {
    continue;
  }

  console.log(colours[i]);
}

// forEach
// we can't use continue or the break keywords in a forEach loop
colours.forEach(function (item) {
  console.log(item);
});

const cars = [
  {
    make: 'BMW',
    colour: 'green',
  },
  {
    make: 'Toyota',
    colour: 'red',
  },
];

cars.forEach(function ({ make, colour }, index) {
  console.log(`Index: ${index} Make: ${make} Colour: ${colour}`);
});
