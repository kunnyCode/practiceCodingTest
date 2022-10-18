// 다시 풀어보기

const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin/14889.txt")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input[0]);
const arr = input.slice(1).map((el) => el.split(" ").map(Number));

let answer = Number.MAX_SAFE_INTEGER;
const check = Array.from({ length: N + 1 }, () => 0);
const temp = [];

function combination(node, start) {
  if (node === N / 2) {
    const ourTeam = temp;
    const otherTeam = others(temp);
    console.log(ourTeam, otherTeam);
    const gap = Math.abs(sum(ourTeam) - sum(otherTeam));
    answer = Math.min(answer, gap);
    return;
  } else {
    for (let i = start; i <= N; i++) {
      if (check[i] === 0) {
        check[i] = 1;
        // temp.push(i);
        temp[node] = i;
        combination(node + 1, i + 1);
        check[i] = 0;
        // temp.pop();
      }
    }
  }
}

const arrN = new Array(N).fill().map((el, idx) => idx + 1);
function others(temp) {
  return arrN.filter((value) => !temp.includes(value));
}

// function sum(team) {
//   let sum = 0;
//   team.map((val) => {
//     team.map((val2) => {
//       if (val !== val2) {
//         sum += parseInt(arr[val - 1][val2 - 1]);
//       }
//     });
//   });
//   return sum;
// }
function sum(team) {
  let sum = 0;
  for (let i = 0; i < team.length; i++) {
    for (let j = 0; j < team.length; j++) {
      if (i === j) continue;
      sum += arr[team[i] - 1][team[j] - 1];
    }
  }
  return sum;
}

combination(0, 1);
console.log(answer);

// console.log(others([1, 2, 3]));
// const fs = require("fs");
// let input = fs
//   .readFileSync("./dev/stdin/14889.txt")
//   .toString()
//   .trim()
//   .split("\n");

// [N, ...arr] = input;
// arr = arr.map((i) => i.split(" ").map(Number));
// N = Number(N);

// const START_TEAM = [];
// const visited = new Array(N).fill(false);
// const answerArr = [];

// function dfs(count, start) {
//   if (count === N / 2) {
//     answerArr.push([...START_TEAM]);
//     return;
//   }

//   for (let i = start; i < N; i++) {
//     if (visited[i]) continue;
//     visited[i] = true;
//     START_TEAM[count] = i;
//     dfs(count + 1, i);
//     visited[i] = false;
//   }
// }

// function remainPeople(people, team) {
//   let result = [];
//   for (let i = 0; i < people.length; i++) {
//     if (!team.includes(people[i])) result.push(people[i]);
//   }
//   return result;
// }

// function calcTeamPoint(points, team) {
//   let result = 0;
//   for (let i = 0; i < team.length; i++) {
//     for (let j = 0; j < team.length; j++) {
//       if (i === j) continue;
//       result += points[team[i]][team[j]];
//     }
//   }
//   return result;
// }

// dfs(0, 0);

// let min = Number.MAX_SAFE_INTEGER;
// let linkTeam = [];
// const people = [];
// for (let i = 0; i < N; i++) people.push(i);
// for (let i = 0; i < answerArr.length / 2; i++) {
//   const startTeam = answerArr[i];
//   linkTeam = remainPeople(people, startTeam);
//   const START_TEAM_POINT = calcTeamPoint(arr, startTeam);
//   const LINK_TEAM_POINT = calcTeamPoint(arr, linkTeam);
//   min = Math.min(min, Math.abs(START_TEAM_POINT - LINK_TEAM_POINT));
// }

// console.log(min);
