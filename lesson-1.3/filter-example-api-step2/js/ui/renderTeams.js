export function renderTeam(teamsToRender) {
  const teamContainer = document.querySelector(".team-container");

  teamContainer.innerHTML = "";

  teamsToRender.forEach(({ full_name }) => {
    teamContainer.innerHTML += `<div class="team">
          <h4>${full_name}</h4>
          </div>`;
  });
}
