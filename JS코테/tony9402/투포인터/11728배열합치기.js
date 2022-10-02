const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let answer = "";
const input = [];
rl.on("line", function (line) {
  input.push(line.split(" "));
}).on("close", function () {
  solution(input);
  console.log(answer);
  process.exit();
});

function solution(arr) {
  const length = Number(arr[0][0]) + Number(arr[0][1]);

  arr = arr.slice(1);
  const firstArr = arr[0].map(Number);
  const seconArr = arr[1].map(Number);

  let firstArrCount = 0;
  let seconArrCount = 0;
  for (let i = 0; i < length; i++) {
    if (firstArrCount === firstArr.length) {
      answer += `${seconArr[seconArrCount]} `;
      seconArrCount++;
    } else if (seconArrCount === seconArr.length) {
      answer += `${firstArr[firstArrCount]} `;
      firstArrCount++;
    } else {
      if (firstArr[firstArrCount] >= seconArr[seconArrCount]) {
        answer += `${seconArr[seconArrCount]} `;
        seconArrCount++;
      } else {
        answer += `${firstArr[firstArrCount]} `;
        firstArrCount++;
      }
    }
  }
}
