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

function solution(input) {
  const N = +input[0];

  input = input.slice(1);

  const tree = Array.from({ length: N + 1 }, () => new Array());

  input.map((val) => {
    const [from, to] = val.map(Number);
    tree[from].push(to);
    tree[to].push(from);
  });

  let check = Array.from({ length: N + 1 }, () => 0);

  function bfs() {
    const queue = [];
    check[1] = 1;
    for (let next of tree[1]) {
      check[next] = 1;
      queue.push(next);
    }

    while (queue.length) {
      const node = queue.shift();
      for (let next of tree[node]) {
        if (check[next]) continue;
        check[next] = node;
        queue.push(next);
      }
    }
  }
  bfs();

  check = check.slice(2);

  check.map((v) => (answer += `${v}\n`));
}
