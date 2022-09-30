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
