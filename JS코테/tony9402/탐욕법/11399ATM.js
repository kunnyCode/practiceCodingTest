const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin/11399.txt")
  .toString()
  .trim()
  .split("\n");

const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let total = 0;
let accu = 0;
for (const num of arr) {
  total += accu + num;
  accu += num;
}

console.log(total);
