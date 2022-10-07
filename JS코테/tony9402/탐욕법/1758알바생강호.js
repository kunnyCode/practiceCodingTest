const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin/1758.txt")
  .toString()
  .trim()
  .split("\n");

const length = input[0];
const arr = input.slice(1).sort((a, b) => b - a);
let totalTip = 0;

for (let i = 0; i < length; i++) {
  const tip = parseInt(arr[i]) - i;
  if (tip < 0) break;
  totalTip += tip;
}

console.log(totalTip);
