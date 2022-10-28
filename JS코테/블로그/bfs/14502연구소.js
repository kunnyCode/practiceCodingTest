const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin/14502.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const lab = input.map((el) => el.split(" ").map(Number));
const visited = Array.from({ length: N }, () => new Array(M).fill(false));

let max = Number.MIN_SAFE_INTEGER;

function spreadVirus(walls, check) {
  let safeZoneNum = 0;
  const visited = check.map((v) => [...v]);
  const tempLab = walls.map((v) => [...v]);
  const queue = [];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (tempLab[i][j] === 2) {
        queue.push([i, j]);
        visited[i][j] = true;

        while (queue.length > 0) {
          const [x, y] = queue.shift();
          for (let k = 0; k < 4; k++) {
            const nx = x + dx[k];
            const ny = y + dy[k];
            if (
              nx >= 0 &&
              ny >= 0 &&
              nx < N &&
              ny < M &&
              visited[nx][ny] === false &&
              tempLab[nx][ny] === 0
            ) {
              queue.push([nx, ny]);
              visited[nx][ny] = true;
              tempLab[nx][ny] = 2;
            }
          }
        }
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (tempLab[i][j] === 0) {
        safeZoneNum++;
      }
    }
  }

  return safeZoneNum;
}

let cnt = 3;
function findOptimumWalls(x, y) {
  if (cnt === 0) {
    const safeZoneNum = spreadVirus(lab, visited);
    max = Math.max(max, safeZoneNum);
    return;
  } else {
    for (let i = x; i < N; i++) {
      for (let j = y; j < M; j++) {
        if (lab[i][j] === 0) {
          cnt--;
          lab[i][j] = 1;
          findOptimumWalls(x, y);
          cnt++;
          lab[i][j] = 0;
        }
      }
    }
  }
}

findOptimumWalls(0, 0);

console.log(max);
