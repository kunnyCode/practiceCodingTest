const fs = require("fs");
let input = fs.readFileSync("./dev/stdin/1343.txt").toString().trim();

// console.log(input);
// 4 2
input = input.split(".");
let answer = "";

for (let str of input) {
  if (answer === -1) break;

  while (str.length > 0) {
    if (str > 3) {
      let count4 = Math.floor(str / 4);
      if (str % 4 === 1 || str % 4 === 3) {
        answer = -1;
        break;
      } else if (str % 4 === 2) {
        answer += "AAAA".repeat(count4);
        answer += "BB";
        str = str.slice(4 * count4 + 2);
      } else {
        answer += "AAAA".repeat(count4);
        str = str.slice(4 * count4);
      }
    } else if (str === 2) {
      answer += "BB";
      str = str.slice(2);
    } else {
      answer = -1;
      break;
    }
  }
  answer += ".";
}

console.log(answer);
