const fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin/20922.txt")
  .toString()
  .trim()
  .split("\n");

const K = parseInt(input[0].split(" ")[1]);
const arr = input[1].split(" ");

let max_len = 0;
let left = 0;
let right = 0;
const count = Array.from({ length: arr.length }, () => 0);

while (right < arr.length) {
  // if (arr.length - left < max_len) {
  //   break;
  // }
  const max = Math.max(...count);

  if (max <= K) {
    count[arr[right]] += 1;
    max_len = Math.max(max_len, right - left);
    right += 1;
    recent = right;
  } else {
    count[arr[left]] -= 1;
    left += 1;
    recent = left;
  }
}
console.log(max_len);

// const fs = require("fs");
// let input = fs
//   .readFileSync("./dev/stdin/20922.txt")
//   .toString()
//   .trim()
//   .split("\n");

// const valArr = input[0].split(" ");
// const arr = input[1].split(" ").map(Number);
// const K = Number(valArr[1]);

// let start = 0;
// let end = 0;
// let length = 1;
// const box = {};
// box[arr[0]] = 1;
// let flag = true;

// while (end < arr.length - 1) {
//   if (flag) {
//     if (end < arr.length - 1) {
//       end++;
//       if (box.hasOwnProperty(arr[end])) {
//         box[arr[end]] += 1;
//       } else {
//         box[arr[end]] = 1;
//       }
//     } else {
//       start++;
//     }
//   } else {
//     box[arr[start]] -= 1;
//     start++;
//   }

//   const numbers = Object.values(box);
//   for (num of numbers) {
//     if (num > K) {
//       flag = false;
//       break;
//     } else {
//       flag = true;
//     }
//   }

//   if (flag) {
//     length = Math.max(length, end - start + 1);
//   }
//   // console.log(start, end);
// }

// console.log(length);
