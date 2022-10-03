const fs = require("fs");
const input = fs.readFileSync("./dev/stdin/11.txt").toString();
// .trim()
// .split("\n");

console.log(getFinalString(input));

function getFinalString(s) {
  // Write your code here
  let answer;

  let prevLength = s.length;
  while (s.length !== 0) {
    s = s.replace(/AWS/g, "");

    // console.log(s);
    if (s.length === prevLength) {
      break;
    } else {
      prevLength = s.length;
    }
  }

  if (s.length === 0) {
    answer = -1;
  } else {
    answer = s;
  }

  return answer;
}
