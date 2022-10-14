const fs = require("fs");
let input = fs.readFileSync("./dev/stdin/2661.txt").toString().trim();

input = parseInt(input);
let end = false;

function solve(str) {
  if (end) return;
  if (str.length == input) {
    console.log(str);
    end = true;
    return;
  } else {
    for (let i = 1; i <= 3; i++) {
      const temp = str + `${i}`;
      if (temp.length <= input && isGood(temp)) {
        solve(temp);
      }
    }
  }
}

function isGood(str) {
  const L = str.length;
  const C = Math.floor(L / 2);
  for (let i = 1; i <= C; i++) {
    const A = L;
    const B = L - i;
    const C = L - i * 2;
    if (C >= 0 && str.substring(B, A) == str.substring(C, B)) {
      return false;
    }
  }
  return true;
}

solve("1");
