//https://school.programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
  var answer = "";

  const tmpArr = s.split(" ");
  const max = Math.max(...tmpArr);
  const min = Math.min(...tmpArr);
  answer += `${min} ${max}`;

  return answer;
}
