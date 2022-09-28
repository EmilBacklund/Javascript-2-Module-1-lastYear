import { renderTeam } from "./renderTeams.js";

export function searchTeams(teams) {
  const search = document.querySelector(".search");

  search.onkeyup = () => {
    //   console.log(event);

    const searchValue = event.target.value.trim().toLowerCase();

    const filteredTeams = teams.filter(({ full_name }) => {
      if (full_name.toLowerCase().startsWith(searchValue)) {
        return true;
      }
    });

    //   console.log(filteredTeams);
    renderTeam(filteredTeams);
  };
}
