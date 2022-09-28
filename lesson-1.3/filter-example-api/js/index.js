import teams from "./data/teams.js";

const search = document.querySelector(".search");
const teamContainer = document.querySelector(".team-container");

let teamsToRender = teams;

function renderTeam() {
  teamContainer.innerHTML = "";

  teamsToRender.forEach(({ full_name }) => {
    teamContainer.innerHTML += `<div class="team">
        <h4>${full_name}</h4>
        </div>`;
  });
}

renderTeam();

search.onkeyup = () => {
  //   console.log(event);
  const searchValue = event.target.value.trim().toLowerCase();

  const filteredTeams = teams.filter(({ full_name }) => {
    if (full_name.toLowerCase().startsWith(searchValue)) {
      return true;
    }
  });

  //   console.log(filteredTeams);
  teamsToRender = filteredTeams;
  renderTeam();
};
