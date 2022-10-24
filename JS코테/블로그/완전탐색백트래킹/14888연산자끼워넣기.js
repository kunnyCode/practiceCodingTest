const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin/14888.txt")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);
const fourSign = input[2].split(" ").map(Number);
const spreadFourSign = [];
for (let i = 0; i < fourSign.length; i++) {
  if (fourSign[i] > 0) {
    for (let j = 0; j < fourSign[i]; j++) {
      spreadFourSign.push(i);
    }
  }
}
const check = Array.from({ length: spreadFourSign.length }, () => false);

// console.log(N, arr, fourSign, spreadFourSign, check);

const temp = [];
let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;
function recursion() {
  if (temp.length === N - 1) {
    // console.log(temp);
    const result = calc(temp);
    max = Math.max(max, result);
    min = Math.min(min, result);
    return;
  } else {
    for (let i = 0; i < spreadFourSign.length; i++) {
      if (!check[i]) {
        check[i] = true;
        temp.push(spreadFourSign[i]);
        recursion();
        check[i] = false;
        temp.pop();
      }
    }
  }
}

function calc(temp) {
  let acc = arr[0];
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === 0) {
      //더하기
      acc += arr[i + 1];
    } else if (temp[i] === 1) {
      //빼기
      acc -= arr[i + 1];
    } else if (temp[i] === 2) {
      //곱하기
      acc *= arr[i + 1];
    } else {
      //나누기
      if (acc < 0) {
        acc = -Math.floor(-acc / arr[i + 1]);
      } else {
        acc = Math.floor(acc / arr[i + 1]);
      }
    }
  }
  // console.log(acc);
  return acc;
}

recursion();
console.log(max === 0 ? 0 : max);
console.log(min === 0 ? 0 : min);
