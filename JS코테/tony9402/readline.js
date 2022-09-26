const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const arr = line.split(" ").map((el) => parseInt(el));
  const result = sum(arr[0], arr[1]);

  console.log(result);
  rl.close();
}).on("close", function () {
  process.exit();
});

//더하기
function sum(a, b) {
  return a + b;
}
