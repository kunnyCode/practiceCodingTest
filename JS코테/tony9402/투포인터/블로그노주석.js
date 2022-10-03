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
  const N = parseInt(arr[0][0]);
  const X = parseInt(arr[0][1]);
  arr = arr[1].map(Number);

  let maxNum = 0;
  let numOfMax = 0;

  for (let i = 0; i < N - X + 1; i++) {
    const sum = arr.slice(i, i + X).reduce((acc, el) => acc + el);
    if (maxNum < sum) {
      numOfMax = 1;
      maxNum = sum;
    } else if (maxNum === sum) {
      numOfMax += 1;
    }
  }

  if (maxNum === 0) {
    answer = "SAD";
  } else {
    answer = maxNum + "\n" + numOfMax + "\n";
  }
}
