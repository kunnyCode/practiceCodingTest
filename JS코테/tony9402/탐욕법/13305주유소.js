const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin/13305.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const roads = input[1].split(" ").map((v) => BigInt(v));
const price = input[2].split(" ").map((v) => BigInt(v));

let oilPrice = price[0];
let period = roads[0];
let budget = oilPrice * period;
for (let i = 1; i < n - 1; i++) {
  if (price[i] < oilPrice) {
    budget += price[i] * roads[i];
    oilPrice = price[i];
  } else {
    budget += oilPrice * roads[i];
  }
}

console.log(String(budget));

// let curPrice = price[0];
// let cost = 0n;

// for (let i = 0; i < n - 1; i++) {
//   cost += curPrice * roads[0];
//   if (curPrice > price[i + 1]) curPrice = price[i + 1];
// }

// console.log(Number(cost));
