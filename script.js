const teamList = document.querySelectorAll("li");
const summary = document.querySelectorAll("#summary")[0];

let teams = [];
let bestTeam = null;
let worstTeam = null;

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

  let winningPercantage = Math.round((winsNumber / ( winsNumber + lossesNumber )) * 100);

  teams.push({
    teamName,
    winningPercantage
  });

  if (winningPercantage >= 50) {
    team.style.color = "green";
  } else {
    team.style.color = "red";
  }
}

teams.forEach(team => {
  if (!bestTeam || bestTeam.winningPercantage < team.winningPercantage) {
    bestTeam = team;
  }

  if (!worstTeam || worstTeam.winningPercantage > team.winningPercantage) {
    worstTeam = team;
  }
});

console.log(teams);
console.log(worstTeam);
console.log(bestTeam);

const bestTeamEl = document.createElement("p");
const worstTeamEl = document.createElement("p");

bestTeamEl.textContent = `The best team was ${bestTeam.teamName} with a winning percntage of ${bestTeam.winningPercantage}%.`;
worstTeamEl.textContent = `The worst team was ${worstTeam.teamName} with a winning percntage of ${worstTeam.winningPercantage}%.`;

summary.appendChild(bestTeamEl);
summary.appendChild(worstTeamEl);
