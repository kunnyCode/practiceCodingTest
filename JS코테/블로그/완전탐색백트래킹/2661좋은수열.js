// 혼자 못 품
// const fs = require("fs");
// let input = fs.readFileSync("./dev/stdin/2661.txt").toString().trim();
// input = parseInt(input);

// let answer = "";
// let temp = "";
// function recursion() {
//   if (temp.length === input) {
//     answer = temp;
//     return;
//   } else {
//     for (let i = 1; i <= 3; i++) {
//       temp = temp + i;
//       // console.log("re", temp, checkOverlap(temp, 1));
//       if (temp.length === 1 || checkOverlap(temp, 1)) {
//         recursion();
//         break;
//       } else {
//         temp = temp.slice(0, -1);
//       }
//     }
//   }
// }

// function checkOverlap(temp, level) {
//   if (level > temp.length / 2) {
//     return true;
//   } else {
//     const prev = temp.slice(temp.length - level * 2, temp.length - level);
//     const next = temp.slice(temp.length - level, temp.length);
//     // console.log(temp, level, prev, next);
//     if (prev === next) {
//       // console.log("같다.");
//       return false;
//     }
//     const flag = checkOverlap(temp, level + 1);
//     if (flag) return true;
//     else return false;
//   }
// }

// recursion();
// console.log(answer, temp);

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
