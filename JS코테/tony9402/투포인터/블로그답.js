// https://www.acmicpc.net/problem/21921

const fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin/21921.txt")
  .toString()
  .trim()
  .split("\n");

const n = input[0].split(" ")[0];
const x = input[0].split(" ")[1];
const guests = input[1].split(" ").map((item) => +item);

let sum = 0;
let maxSum = 0;
let count = 0;

for (let i = 0; i < x; i++) {
  sum += guests[i];
}

maxSum = sum;
count++;

for (let i = x - 1; i < n; i++) {
  sum = sum - guests[i - x + 1] + guests[i + 1];
  if (sum === maxSum) {
    count++;
  }

  if (sum > maxSum) {
    count = 1;
    maxSum = sum;
  }
}

if (maxSum === 0) {
  console.log("SAD");
  process.exit();
}

console.log(maxSum);
console.log(count);
