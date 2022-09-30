// https://www.acmicpc.net/problem/11279

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let answer = [];
const inputArr = [];
rl.on("line", function (line) {
  inputArr.push(line);
}).on("close", function () {
  solution(inputArr);
  console.log(answer.join("\n"));
  process.exit();
});

function solution(arr) {
  const numArr = arr.map((el) => +el);
  const heap = new MaxHeap();

  for (let i = 0; i < numArr.length; i++) {
    // console.log(heap);
    if (i === 0) continue;
    if (numArr[i] === 0) {
      if (heap.size() === 0) {
        answer.push(0);
      } else {
        const number = heap.pop();
        answer.push(number);
      }
    } else if (numArr[i] > 0) {
      heap.push(numArr[i]);
    }
  }
}

class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  size() {
    return this.heap.length - 1;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push(value) {
    this.heap.push(value);

    let curIdx = this.heap.length - 1;
    let parIdx = Math.floor(curIdx / 2);

    while (curIdx > 1 && this.heap[curIdx] > this.heap[parIdx]) {
      this.swap(curIdx, parIdx);
      curIdx = parIdx;
      parIdx = Math.floor(curIdx / 2);
    }
  }

  pop() {
    // if (this.heap.length < 2) return 0;

    const max = this.heap[1];

    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rightIdx = curIdx * 2 + 1;

    if (!this.heap[leftIdx]) return max;
    if (!this.heap[rightIdx]) {
      if (this.heap[curIdx] < this.heap[leftIdx]) {
        this.swap(curIdx, leftIdx);
      }
      return max;
    }

    while (
      this.heap[leftIdx] > this.heap[curIdx] ||
      this.heap[rightIdx] > this.heap[curIdx]
    ) {
      let maxIdx;

      if (!this.heap[rightIdx]) {
        maxIdx = leftIdx;
      } else {
        maxIdx = this.heap[leftIdx] > this.heap[rightIdx] ? leftIdx : rightIdx;
      }

      this.swap(maxIdx, curIdx);

      curIdx = maxIdx;
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;
    }
    return max;
  }
}
