// 재귀로 풀어서 시간초과가 난다고 생각했지만 사실 visited배열을 통해 방문처리를 하는 방식으로 풀지 않아 시간 초과가 난 것이다. 담부턴 방문처리 꼭하자!
// 하지만 그래도 while문 2개 중첩보다 재귀가 느린건 맞는 것 같다.

const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin/16236.txt")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input.shift());
const space = input.map((el) => el.split(" ").map(Number));
const checkDistance = Array.from({ length: N }, () => new Array(N).fill(0));
const visited = Array.from({ length: N }, () => new Array(N).fill(false));
let totalDistance = 0;
let shark = 2;
let ate = 0;

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// console.log(N, space, checkDistance);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (space[i][j] === 9) {
      space[i][j] = 0;
      bfs(i, j, checkDistance);
      break;
    }
  }
}

function bfs(a, b, checkDistance) {
  const queue = [[a, b, 0]];
  const distanceMap = checkDistance.map((arr) => [...arr]);
  const visited = Array.from({ length: N }, () => new Array(N).fill(false));
  const candidateFish = [];
  let shortestDistance = Number.MAX_SAFE_INTEGER;

  while (queue.length > 0) {
    const [x, y, z] = queue.shift();
    if (z > shortestDistance) break;

    distanceMap[x][y] = z;

    if (space[x][y] > 0 && space[x][y] < shark) {
      if (candidateFish.length === 0) {
        candidateFish.push([x, y, z]);
        shortestDistance = z;
      } else {
        // let flag = false;
        // for (fish of candidateFish) {
        //   const [e, f, g] = fish;
        //   if (e === x && f === y && g === z) {
        //     flag = true;
        //   }
        // }
        // if (!flag) candidateFish.push([x, y, z]);
      }
      // candidateFish.push([x, y, z]);
      candidateFish.push([x, y, z]);
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      // console.log("x, y", x, y);
      // console.log("nx, ny", nx, ny);
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < N &&
        ny < N &&
        visited[nx][ny] === false &&
        // distanceMap[nx][ny] === 0 &&
        space[nx][ny] <= shark
      ) {
        // console.log("push", nx, ny, z + 1);
        visited[nx][ny] = true;
        queue.push([nx, ny, z + 1]);
      }
    }
  }
  // console.log("상어 크기", shark);
  // console.log("후보 물고기", candidateFish);
  if (candidateFish.length === 0) return;

  const [x, y, distance] = targetFish(candidateFish);

  // console.log("먹으러 간 물고기", x, y, distance);
  totalDistance += distance;
  space[x][y] = 0;
  ate++;
  if (ate === shark) {
    shark += 1;
    ate = 0;
  }

  bfs(x, y, checkDistance);
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
