const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin/2178.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const maze = input.map((el) => el.split("").map(Number));
const check = Array.from({ length: N }, () => new Array(M).fill(false));

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

const queue = [];

function bfs() {
  while (queue.length > 0) {
    const [x, y, acc] = queue.shift();
    if (!check[x][y]) {
      check[x][y] = true;
      maze[x][y] += acc;
      // 해당 for문이 if문 밖에 있으면 시간초과가 납니다잉
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < N &&
          ny < M &&
          maze[nx][ny] === 1 &&
          !check[nx][ny]
        ) {
          queue.push([nx, ny, acc + 1]);
        }
      }
    }
  }
}

queue.push([0, 0, 0]);
bfs();
console.log(maze[N - 1][M - 1]);
