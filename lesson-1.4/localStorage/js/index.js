const myVariable = "Some variable";

localStorage.setItem("variable2", "asdasdasd");
// localStorage.setItem("variable2", "33333");

// localStorage.removeItem("variable1");

window.localStorage.setItem("variable1", myVariable);

// clear everything in localStorage
// localStorage.clear();

const colours = ["red", "blue", "green"];

localStorage.setItem("colours", JSON.stringify(colours));

const var2 = localStorage.getItem("variable2");

const myColours = localStorage.getItem("colours");

console.log(var2);
console.log(JSON.parse(myColours));

// JSON.stringify - to save
// JSON.parse - when retrieving

// sessionStorage saves keys and variables as localstorage
// But it won't be saved if you close the tab or open a new tab
sessionStorage.setItem("var3", "seassion storage");
