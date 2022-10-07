const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin/11047.txt")
  .toString()
  .trim()
  .split("\n");

const tmp = input[0].split(" ");
const K = parseInt(tmp[1]);
const arr = input.slice(1).map(Number);
let temp = K;
let count = 0;

for (let i = arr.length - 1; i >= 0; i--) {
  if (temp === 0) break;
  if (arr[i] > temp) {
    continue;
  } else {
    const times = Math.floor(temp / arr[i]);
    temp = temp - times * arr[i];
    count += times;
  }
}

console.log(count);
