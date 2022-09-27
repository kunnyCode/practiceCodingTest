// https://www.acmicpc.net/problem/10828

//readline 다루기가 힘듦
//switch에서 break를 넣지 않은 실수를 했
//따로따로 console.log를 찍으면 시간초과가 뜸

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let answer = "";
const stack = [];

rl.on("line", function (line) {
  input.push(line.split(" "));
}).on("close", function () {
  solveFunc(input);
  console.log(answer);
  process.exit();
});

function solveFunc(arr) {
  // const ordersLength = arr[0][0];
  for (let i = 1; i < arr.length; i++) {
    switch (arr[i][0]) {
      case "push":
        push(arr[i][1]);
        break;
      case "pop":
        pop();
        break;
      case "size":
        size();
        break;
      case "empty":
        empty();
        break;
      case "top":
        top();
        break;
    }
  }
}

function push(num) {
  const number = parseInt(num);
  stack.push(number);
}

function pop() {
  if (stack.length === 0) {
    // console.log(-1);
    answer += -1 + "\n";
  } else {
    const popNum = stack.pop();
    // console.log(popNum);
    answer += popNum + "\n";
  }
}

function size() {
  // console.log(stack.length);
  answer += stack.length + "\n";
}

function empty() {
  if (stack.length === 0) {
    // console.log(1);
    answer += 1 + "\n";
  } else {
    // console.log(0);
    answer += 0 + "\n";
  }
}

function top() {
  if (stack.length === 0) {
    // console.log(-1);
    answer += -1 + "\n";
  } else {
    // console.log(stack[stack.length-1])
    // console.log(stack.slice(-1)[0]);
    answer += stack.slice(-1)[0] + "\n";
  }
}
