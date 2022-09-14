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

console.log("7번 문제 답:", solution(3, [25, 23, 11, 47, 53, 17, 33]));
console.log("7번 문제 답:", solution(0, [12, 20, 54, 30, 87, 91, 30]));
