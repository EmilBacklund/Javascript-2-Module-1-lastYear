import { renderTeam } from "./ui/renderTeams.js";
import { searchTeams } from "./ui/searchTeams.js";
import { displayMessage } from "./ui/displayMessage.js";

const url = "https://noroff.herokuapp.com/v1/nba-teams/teams";

async function getTeams() {
  try {
    const response = await fetch(url);
    const teams = await response.json();

    renderTeam(teams);
    searchTeams(teams);
    // displayMessage("success", "API call was a success", ".team-container");

    console.log(teams);
  } catch (err) {
    displayMessage("error", err, ".team-container");
  }
}

getTeams();
