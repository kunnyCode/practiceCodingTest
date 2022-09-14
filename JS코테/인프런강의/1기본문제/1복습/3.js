function solution(x) {
  const howManyDasNeeded = Math.ceil(x / 12);
  return howManyDasNeeded;
}

console.log("3번 문제 답:", solution(25));
console.log("3번 문제 답:", solution(178));
