const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin/2960.txt")
  .toString()
  .trim()
  .split(" ");

const N = parseInt(input[0]);
const K = parseInt(input[1]);
const arr = Array(N)
  .fill()
  .map((v, i) => i + 1)
  .splice(1);
let cnt = 0;
let answer = -1;

outerFor: for (let i = 0; i < N; i++) {
  if (arr[i] !== 0) {
    const P = arr[i];
    for (let j = 0; j < N; j++) {
      if (arr[j] !== 0 && arr[j] % P === 0) {
        cnt++;
        if (cnt === K) {
          answer = arr[j];
          break outerFor;
        }
        arr[j] = 0;
      }
    }
  }
}

console.log(answer);
