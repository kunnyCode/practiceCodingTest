const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  //12
  //13
  //이렇게 들어오는 경유
  //['12', '13'] 이렇게 들어옴
  // input.push(line);

  //12 12
  //13 13
  //이렇게 들어오는 경우
  //[['12', '12'] ['13', '13']] 이렇게 들어옴
  input.push(line.split(" "));

  //input.push(line.split(" ").map((el) => parseInt(el)))
  //얘는
  //[[12, 12] [13, 13]] 이렇게 들어옴
}).on("close", function () {
  console.log(input);
  process.exit();
});
