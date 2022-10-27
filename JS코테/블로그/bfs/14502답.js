//답
const fs = require("fs");
const input = fs.readFileSync("./dev/stdin/14502.txt").toString().split("\n");
const NM = input.shift().split(" ");
const N = Number(NM.shift());
const M = Number(NM.shift());
let dxy = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
let cnt = 3;
let max = 0;

let map = new Array(10);
for (let i = 0; i < 10; i++) {
  map[i] = new Array(10);
}

let map2 = new Array(10);
for (let i = 0; i < 10; i++) {
  map2[i] = new Array(10);
}

for (let i = 1; i <= N; i++) {
  let temp = input.shift().split(" ");
  for (let j = 1; j <= M; j++) {
    map[i][j] = Number(temp[j - 1]);
  }
}

function BFS(y, x, visited) {
  let queue = [];
  queue.push([y, x]);
  visited[y][x] = true;

  while (queue.length > 0) {
    let xy = queue.shift();
    let cy = xy[0];
    let cx = xy[1];

    for (let next = 0; next < 4; next++) {
      let nextY = cy + dxy[next][0];
      let nextX = cx + dxy[next][1];

      if (!visited[nextY][nextX] && map2[nextY][nextX] === 0) {
        queue.push([nextY, nextX]);
        visited[nextY][nextX] = true;
        map2[nextY][nextX] = 2;
      }
    }
  }
}

function count() {
  // for(let i=1; i<=N; i++){
  //   for(let j=1; j<=M; j++){
  //     map2[i][j] = map[i][j];
  //   }
  // }
  map2 = map.map((v) => v.slice());

  let visited = new Array(10);
  for (let i = 0; i < 10; i++) {
    visited[i] = new Array(10).fill(false);
  }

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      if (map2[i][j] === 2) {
        BFS(i, j, visited);
      }
    }
  }

  let safe = 0;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (map2[i][j] === 0) safe++;
    }
  }

  if (safe > max) {
    max = safe;
  }
}

function solution(y, x) {
  if (cnt === 0) {
    return count();
  }

  for (let i = y; i <= N; i++) {
    for (let j = x; j <= M; j++) {
      if (map[i][j] === 0) {
        cnt--;
        map[i][j] = 1;
        solution(y, x);
        cnt++;
        map[i][j] = 0;
      }
    }
  }
}

solution(1, 1);
console.log(max);
