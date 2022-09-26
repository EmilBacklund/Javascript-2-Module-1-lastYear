import { displayError } from "./components/displayError.js";

const url = "https://api.disneyapi.dev/characters/";
const resultsContainer = document.querySelector(".results");

async function getCats() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    const data = results.data;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
      console.log(data[i].name);

      if (i === 5) {
        break;
      }
      resultsContainer.innerHTML += `<div class="result">${data[i].name}</div>`;
    }
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = displayError(`Bad things happened: ${error}`);
  }
}

getCats();
