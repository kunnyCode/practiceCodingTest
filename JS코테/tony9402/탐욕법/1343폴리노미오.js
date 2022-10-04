const fs = require("fs");
let input = fs.readFileSync("./dev/stdin/1343.txt").toString().trim();

// console.log(input);
// 4 2
input = input.split(".");
let answer = "";

for (let i = 0; i < input.length; i++) {
  if (answer === -1) break;
  let s = input[i].length;

  while (s > 0) {
    if (s > 3) {
      let count4 = Math.floor(s / 4);
      if (s % 4 === 1 || s % 4 === 3) {
        answer = -1;
        break;
      } else if (s % 4 === 2) {
        answer += "AAAA".repeat(count4);
        answer += "BB";
        s = s - (4 * count4 + 2);
      } else {
        answer += "AAAA".repeat(count4);
        s = s - 4 * count4;
      }
    } else if (s === 2) {
      answer += "BB";
      s = s - 2;
    } else {
      answer = -1;
      break;
    }
  }

  if (i !== input.length - 1 && answer !== -1) answer += ".";
}

console.log(answer);
