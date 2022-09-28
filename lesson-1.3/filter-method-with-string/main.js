const names = ["Alice", "Anders", "Ben", "Mari", "Marie", "Xander"];

// const filteredNames = names.filter(filterNames);

// function filterNames(name) {
//   if (
// name.toLowerCase().startsWith("a") ||
// name.endsWith("i") ||
// name.toLowerCase().includes("x")
//   ) {
//     return true;
//   }
// }

// console.log(names);
// console.log(filteredNames);

const filteredNames = names.filter(
  (name) =>
    name.toLowerCase().startsWith("a") ||
    name.endsWith("i") ||
    name.toLowerCase().includes("x")
);

console.log(filteredNames);
