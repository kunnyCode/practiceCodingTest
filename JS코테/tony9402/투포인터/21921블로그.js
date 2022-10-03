const fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin/21921.txt")
  .toString()
  .trim()
  .split("\n");

const X = Number(input[0].split(" ")[1]);
input = input[1].split(" ").map(Number);

if (Math.max(...input) === 0) {
  console.log("SAD");
} else {
  let maxNum = 0;
  let numOfMax = 0;

  for (let i = 0; i < input.length - X + 1; i++) {
    const sum = input.slice(i, i + X).reduce((acc, el) => acc + el);

    if (maxNum < sum) {
      numOfMax = 1;
      maxNum = sum;
    } else if (maxNum === sum) {
      numOfMax += 1;
    }
  }
  console.log(maxNum + "\n" + numOfMax + "\n");
}
