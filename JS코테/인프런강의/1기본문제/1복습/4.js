function solution(x) {
  let sum = 0;
  for (let i = 1; i <= x; i++) {
    sum += i;
  }
  return sum;
}

console.log("4번 문제 답:", solution(6));
console.log("4번 문제 답:", solution(10));
