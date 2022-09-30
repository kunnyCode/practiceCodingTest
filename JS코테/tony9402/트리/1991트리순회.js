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

  const tree = {};
  for (node of input) {
    tree[node[0]] = [node[1], node[2]];
  }

  let result = "";

  // console.log(tree);
  function preOrder(node) {
    if (node === ".") return;
    const [lt, rt] = tree[node];

    result += node;
    preOrder(lt);
    preOrder(rt);
  }

  function inOrder(node) {
    if (node === ".") return;
    const [lt, rt] = tree[node];

    inOrder(lt);
    result += node;
    inOrder(rt);
  }

  function postOrder(node) {
    if (node === ".") return;
    const [lt, rt] = tree[node];

    postOrder(lt);
    postOrder(rt);
    result += node;
  }

  preOrder(input[0][0]);
  result += "\n";
  inOrder(input[0][0]);
  result += "\n";
  postOrder(input[0][0]);

  answer = result;
}
