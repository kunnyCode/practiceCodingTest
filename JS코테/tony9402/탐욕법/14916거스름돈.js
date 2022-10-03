// https://www.acmicpc.net/problem/14916

// const fs = require("fs");
// let input = fs.readFileSync("./dev/stdin/14916.txt").toString().trim();

// let answer = 0;
// let needed2 = 0;
// let needed5 = 0;

// input = Number(input);

// if (input === 1 || input === 3) {
//   answer = -1;
//   console.log(answer);
// } else {
//   if (input % 2 === 0) {
//     let numOf5 = Math.floor(input / 5);
//     if (numOf5 % 2 !== 0) numOf5--;

//     needed2 = (input - numOf5 * 5) / 2;
//     needed5 = numOf5;
//   } else {
//     let numOf5 = Math.floor(input / 5);
//     if (numOf5 % 2 === 0) numOf5--;
//     needed2 = (input - numOf5 * 5) / 2;
//     needed5 = numOf5;
//   }

//   if (needed5 * 5 + needed2 * 2 !== input) {
//     answer = -1;
//   } else {
//     answer = needed2 + needed5;
//   }

//   console.log(answer);
// }

//모범답안

const input = require("fs")
  .readFileSync("./dev/stdin/14916.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);

function solution(n) {
  let answer = 0;
  if (n === 1 || n === 3) return -1;

  while (n > 0) {
    if (n % 2 === 1 || n % 5 === 0) {
      answer += 1;
      n -= 5;
    } else if (n % 2 === 0) {
      answer += 1;
      n -= 2;
    }
  }

  return answer;
}

const answer = solution(n);
console.log(answer);
