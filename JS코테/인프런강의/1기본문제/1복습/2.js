function solution(a, b, c) {
  const arr = [a, b, c];
  const sortedArr = arr.sort((a, b) => a - b);

  if (sortedArr[2] < sortedArr[0] + sortedArr[1]) {
    return "YES";
  }
  return "NO";
}

console.log("2번 문제 답:", solution(6, 7, 11));
console.log("2번 문제 답:", solution(13, 33, 77));
