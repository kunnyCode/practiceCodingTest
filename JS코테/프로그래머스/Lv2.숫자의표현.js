// https://school.programmers.co.kr/learn/courses/30/lessons/12924

function solution(n) {
  var answer = 1;

  for (let i = 1; i < n; i++) {
    let num = 0;
    let j = i;
    while (num < n) {
      num += j;
      j++;
    }

    if (num === n) answer += 1;
  }

  return answer;
}

//모범답안
//n의 약수중 홀수의 갯수가 정답
function expressions(num) {
  var answer = 0;

  for (var i = 1; i <= num; i++) {
    if (num % i == 0 && i % 2 == 1) answer++;
  }
  return answer;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(expressions(15));
