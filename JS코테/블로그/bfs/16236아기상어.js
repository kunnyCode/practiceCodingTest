const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin/16236.txt")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input.shift());
const space = input.map((el) => el.split(" ").map(Number));
let totalDistance = 0;
let shark = 2;
let ate = 0;

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (space[i][j] === 9) {
      space[i][j] = 0;
      bfs(i, j);
      break;
    }
  }
}

function bfs(a, b) {
  const q = [[a, b]];
  while (q) {
    const queue = [];
    const temp = q.shift();
    queue.push([temp[0], temp[1], 0]);
    const distanceMap = Array.from({ length: N }, () => new Array(N).fill(0));
    const visited = Array.from({ length: N }, () => new Array(N).fill(false));
    const candidateFish = [];
    let shortestDistance = Number.MAX_SAFE_INTEGER;

    while (queue.length > 0) {
      const [x, y, z] = queue.shift();
      if (z > shortestDistance) break;

      distanceMap[x][y] = z;

      if (space[x][y] > 0 && space[x][y] < shark) {
        if (candidateFish.length === 0) {
          shortestDistance = z;
        }
        candidateFish.push([x, y, z]);
      }

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < N &&
          ny < N &&
          visited[nx][ny] === false &&
          space[nx][ny] <= shark
        ) {
          visited[nx][ny] = true;
          queue.push([nx, ny, z + 1]);
        }
      }
    }
    if (candidateFish.length === 0) {
      return;
    } else {
      const [x, y, distance] = targetFish(candidateFish);

      totalDistance += distance;
      space[x][y] = 0;
      ate++;
      if (ate === shark) {
        shark += 1;
        ate = 0;
      }
      q.push([x, y]);
    }
  }
}

function targetFish(candidateFish) {
  candidateFish.sort((a, b) => {
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    return 0;
  });

  return candidateFish.shift();
}

console.log(totalDistance);
