const people = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Anders" },
  { id: 3, name: "Mari" },
];

const filteredPeople = people.filter(({ id, name }) => {
  if (name === "Alice" || id === 3) {
    return true;
  }
});

console.log(filteredPeople);
