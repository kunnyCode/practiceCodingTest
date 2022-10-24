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
    // map에 값이 1이면서 한번도 방문하지 않은 경우
    if (map[i][j] === 1 && check[i][j] === 0) {
      //총 단지수 수를 1 올린다.
      totalCnt += 1;

      //해당 번지를 큐에 넣은 뒤 bfs를 돌면서 주변 인접한 단지를 다 찾는다.
      queue.push([i, j]);
      while (queue.length > 0) {
        const [x, y] = queue.shift();
        // 한번도 방문하지 않은경우
        if (check[x][y] === 0) {
          // 큐에서 꺼내서 방문을 확일할 때 방문을 안했을 경우 이 때 방문 처리를 한다.
          // 연결된 단지 수를 1 올린다.
          check[x][y] = 1;
          answerCnt += 1;
          for (let k = 0; k < 4; k++) {
            const a = x + dx[k];
            const b = y + dy[k];
            if (a > -1 && a < N && b > -1 && b < N) {
              // 1인 경우 단지가 있다고 판단, 큐에 넣는다.
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
