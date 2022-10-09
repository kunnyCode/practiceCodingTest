const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin/2798.txt")
  .toString()
  .trim()
  .split("\n");

const length = parseInt(input[0].split(" ")[0]);
const M = parseInt(input[0].split(" ")[1]);
const arr = input[1].split(" ").map(Number);
const checkArr = Array.from({ length: length }, () => false);
const list = Array.from({ length: 3 }, () => 0);
const answerList = [];

function findProximation() {
  let answer = 0;
  let proximation = Number.MAX_SAFE_INTEGER;
  for (const eachArr of answerList) {
    const sum = eachArr.reduce((acc, cur) => acc + cur);
    if (sum > M) continue;
    const gap = M - sum;
    if (proximation > gap) {
      proximation = gap;
      answer = sum;
    }
  }
  return answer;
}

function reacursion(cnt) {
  if (cnt === 3) {
    answerList.push([...list]);
    return;
  } else {
    for (let i = 0; i < length; i++) {
      if (!checkArr[i]) {
        checkArr[i] = true;
        list[cnt] = arr[i];
        reacursion(cnt + 1);
        checkArr[i] = false;
      }
    }
  }
}

reacursion(0);
console.log(findProximation());
