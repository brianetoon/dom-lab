const teamList = document.querySelectorAll("li");
const summary = document.querySelector("#summary");

let teams = [];


for (let team of teamList) {
  let teamStr = team.textContent;
  let teamStrSplit = teamStr.split(":");
  let teamName = teamStrSplit[0];

  let teamRecord = teamStrSplit[1];
  let teamRecordArr = teamRecord.split(",");

  let teamWins = teamRecordArr[0];
  let wins = teamWins.split(" ")[1];
  let winsNumber = Number(wins);

  let teamLosses = teamRecordArr[1];
  let losses = teamLosses.split(" ")[1];
  let lossesNumber = Number(losses);

  let winningPercentage = Math.round((winsNumber / ( winsNumber + lossesNumber )) * 100);

  teams.push({
    teamName,
    winningPercentage
  });

  if (winningPercentage >= 50) {
    team.style.color = "green";
  } else {
    team.style.color = "red";
  }
}

teams.sort((teamA, teamB) => teamB.winningPercentage - teamA.winningPercentage);

console.log(teams);
const bestTeam = teams[0];
const worstTeam = teams.at(-1);

const bestTeamEl = document.createElement("p");
const worstTeamEl = document.createElement("p");

bestTeamEl.textContent = `The best team was ${bestTeam.teamName} with a winning percntage of ${bestTeam.winningPercentage}%.`;
worstTeamEl.textContent = `The worst team was ${worstTeam.teamName} with a winning percntage of ${worstTeam.winningPercentage}%.`;

summary.appendChild(bestTeamEl);
summary.appendChild(worstTeamEl);
