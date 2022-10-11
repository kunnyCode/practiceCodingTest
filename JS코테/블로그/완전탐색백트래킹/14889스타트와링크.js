const fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin/14889.txt")
  .toString()
  .trim()
  .split("\n");

[N, ...arr] = input;
arr = arr.map((i) => i.split(" ").map(Number));
N = Number(N);

const START_TEAM = [];
const visited = new Array(N).fill(false);
const answerArr = [];

function dfs(count, start) {
  if (count === N / 2) {
    answerArr.push([...START_TEAM]);
    return;
  }

  for (let i = start; i < N; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    START_TEAM[count] = i;
    dfs(count + 1, i);
    visited[i] = false;
  }
}

function remainPeople(people, team) {
  let result = [];
  for (let i = 0; i < people.length; i++) {
    if (!team.includes(people[i])) result.push(people[i]);
  }
  return result;
}

function calcTeamPoint(points, team) {
  let result = 0;
  for (let i = 0; i < team.length; i++) {
    for (let j = 0; j < team.length; j++) {
      if (i === j) continue;
      result += points[team[i]][team[j]];
    }
  }
  return result;
}

dfs(0, 0);

let min = Number.MAX_SAFE_INTEGER;
let linkTeam = [];
const people = [];
for (let i = 0; i < N; i++) people.push(i);
for (let i = 0; i < answerArr.length / 2; i++) {
  const startTeam = answerArr[i];
  linkTeam = remainPeople(people, startTeam);
  const START_TEAM_POINT = calcTeamPoint(arr, startTeam);
  const LINK_TEAM_POINT = calcTeamPoint(arr, linkTeam);
  min = Math.min(min, Math.abs(START_TEAM_POINT - LINK_TEAM_POINT));
}

console.log(min);
