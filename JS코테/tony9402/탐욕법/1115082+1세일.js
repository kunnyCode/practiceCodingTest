// const fs = require("fs");
// const input = fs
//   .readFileSync("./dev/stdin/11508.txt")
//   .toString()
//   .trim()
//   .split("\n");

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  console.log(solution(input));
  process.exit();
});

function solution(input) {
  const arr = input
    .slice(1)
    .map(Number)
    .sort((a, b) => b - a);

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i % 3 === 2) {
      arr[i] = 0;
    }

    sum += arr[i];
  }

  return sum;
}
