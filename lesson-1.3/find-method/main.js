const people = [
  {
    id: 1,
    name: "Alice",
  },
  {
    id: 2,
    name: "Anders",
  },
  {
    id: 3,
    name: "Mari",
  },
];

const person = people.find((findPerson) => {
  if (findPerson.id === 2) {
    return true;
  }
});

// function findPerson(person) {
//   if (person.id === 2) {
//     return true;
//   }
// }

console.log(person);
