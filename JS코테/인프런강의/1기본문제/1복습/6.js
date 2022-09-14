function solution(arr) {
  let oddNumArr = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      oddNumArr.push(arr[i]);
      sum += arr[i];
    }
  }

  const min = Math.min(...oddNumArr);

  return `홀수의 합: ${sum}, 최소홀수값${min}`;
}

console.log("6번 문제 답:", solution([12, 77, 38, 41, 53, 92, 85]));
