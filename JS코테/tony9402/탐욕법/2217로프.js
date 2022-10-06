const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin/2217.txt")
  .toString()
  .trim()
  .split("\n");

const length = parseInt(input[0]);
const arr = input.slice(1).sort((a, b) => a - b);

let max = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < length; i++) {
  const canEndure = (length - i) * parseInt(arr[i]);
  max = Math.max(max, canEndure);
}

console.log(max);
