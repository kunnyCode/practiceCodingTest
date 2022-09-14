function solution(a, b, c) {
  const firstCompare = Math.min(a, b);
  const lastCompare = Math.min(firstCompare, c);
  return lastCompare;
}

console.log("1번 문제 답:", solution(6, 5, 11));
