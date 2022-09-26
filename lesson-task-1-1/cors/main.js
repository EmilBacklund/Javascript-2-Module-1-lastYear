import { alert } from "./components/alert.js";

const url = "https://elephant-api.herokuapp.com/elephants";
const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;

const resultsContainer = document.querySelector(".results");

async function getElephants() {
  try {
    const response = await fetch(url);
    const results = await response.json();

    console.log(results);
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = alert("error", error);
  }
}

getElephants();
