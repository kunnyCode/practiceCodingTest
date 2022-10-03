const fs = require("fs");
let input = fs.readFileSync("./dev/stdin/14916.txt").toString().trim();

let answer = 0;
let needed2 = 0;
let needed5 = 0;

input = Number(input);

if (input === 1 || input === 3) {
  answer = -1;
  console.log(answer);
} else {
  if (input % 2 === 0) {
    let numOf5 = Math.floor(input / 5);
    if (numOf5 % 2 !== 0) numOf5--;

    needed2 = (input - numOf5 * 5) / 2;
    needed5 = numOf5;
  } else {
    let numOf5 = Math.floor(input / 5);
    if (numOf5 % 2 === 0) numOf5--;
    needed2 = (input - numOf5 * 5) / 2;
    needed5 = numOf5;
  }

  if (needed5 * 5 + needed2 * 2 !== input) {
    answer = -1;
  } else {
    answer = needed2 + needed5;
  }

  console.log(answer);
}
