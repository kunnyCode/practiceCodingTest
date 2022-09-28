// https://school.programmers.co.kr/learn/courses/30/lessons/12941

function solution(A, B) {
  var answer = 0;
  const firstArr = [...A];
  const secondArr = [...B];

  firstArr.sort((a, b) => a - b);
  secondArr.sort((a, b) => a - b);

  for (let i = 0; i < A.length; i++) {
    answer += firstArr.shift() * secondArr.pop();
  }

  return answer;
}

// 모범답안
function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.reduce((total, val, idx) => total + val * B[idx], 0);
}
