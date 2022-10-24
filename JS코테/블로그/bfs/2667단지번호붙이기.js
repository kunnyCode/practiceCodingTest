const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin/2667.txt")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input[0]);
const map = input.slice(1).map((el) => el.split("").map(Number));
const check = Array.from({ length: N }, () => new Array(N).fill(0));

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

let totalCnt = 0;
let answerCnt = 0;
const answerArr = [];

const queue = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 1 && check[i][j] === 0) {
      // check[i][j] = 1;
      totalCnt += 1;
      queue.push([i, j]);
      while (queue.length > 0) {
        const [x, y] = queue.shift();
        // console.log(check[x][y], x, y);
        if (check[x][y] === 0) {
          check[x][y] = 1;
          answerCnt += 1;
          for (let k = 0; k < 4; k++) {
            const a = x + dx[k];
            const b = y + dy[k];
            if (a > -1 && a < N && b > -1 && b < N) {
              if (map[a][b] === 1) {
                queue.push([a, b]);
                // console.log(queue);
              }
            }
          }
        }
      }
    }
    if (answerCnt !== 0) answerArr.push(answerCnt);
    answerCnt = 0;
  }
}

answerArr.sort((a, b) => a - b);
console.log(totalCnt);
for (const res of answerArr) {
  console.log(res);
}
