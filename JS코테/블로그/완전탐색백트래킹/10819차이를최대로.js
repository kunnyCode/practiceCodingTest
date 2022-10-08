const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin/10819.txt")
  .toString()
  .trim()
  .split("\n");

let list = [];
let result = [];
let check = new Array(9).fill(false);

let n = parseInt(input[0]);
const numbers = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

function max_abs() {
  let max = 0;
  result.reduce((acc, cur) => {
    let tmp = cur.split(" ");
    let sum = 0;
    for (let i = 0; i < tmp.length - 1; i++) {
      sum += Math.abs(tmp[i] * 1 - tmp[i + 1] * 1);
    }
    max = Math.max(max, sum);
  }, "");
  return max;
}

function re(cnt, n, start) {
  if (cnt === n) {
    result.push(list.join(" "));
    return;
  }
  for (let i = start; i < n; i++) {
    if (!check[i]) {
      check[i] = true;
      list[cnt] = numbers[i];
      re(cnt + 1, n, 0);
      check[i] = false;
    }
  }
}

re(0, n, 0);

console.log(max_abs());

// 결국 이걸로 풀지 못함
// const fs = require("fs");
// const input = fs
//   .readFileSync("./dev/stdin/10819.txt")
//   .toString()
//   .trim()
//   .split("\n");

// const length = parseInt(input[0]);
// const sortedArr = input[1]
//   .split(" ")
//   .map(Number)
//   .sort((a, b) => a - b);

// const smallArr = [];
// const bigArr = [];

// const acc = sortedArr.reduce((acc, val) => acc + val) / length;

// if (acc > 0) {
//   const middle = Math.floor(length / 2);
//   for (let i = 0; i < length; i++) {
//     if (i < middle) {
//       smallArr.push(sortedArr.shift());
//     } else {
//       bigArr.push(sortedArr.shift());
//     }
//   }
// } else {
//   const middle = acc;
//   const tempSortedArr = [...sortedArr];
//   for (let i = 0; i < length; i++) {
//     if (sortedArr[i] < middle) {
//       smallArr.push(tempSortedArr.shift());
//     } else {
//       bigArr.push(tempSortedArr.shift());
//     }
//   }
// }

// let count = length;
// let bigCount = 0;
// let smallCount = 0;
// const answerArr = [];
// while (count > 0) {
//   if (bigArr.length > 0) {
//     if (bigCount % 2 === 0) {
//       answerArr.unshift(bigArr.pop());
//     } else {
//       answerArr.push(bigArr.pop());
//     }
//     bigCount++;
//     count--;
//   }

//   if (smallArr.length > 0) {
//     if (smallCount % 2 === 0) {
//       answerArr.push(smallArr.shift());
//     } else {
//       answerArr.unshift(smallArr.shift());
//     }
//     smallCount++;
//     count--;
//   }
// }

// let answer = 0;
// for (let i = 0; i < answerArr.length - 1; i++) {
//   const temp = Math.abs(answerArr[i] - answerArr[i + 1]);
//   answer += temp;
// }
// console.log(answer);
