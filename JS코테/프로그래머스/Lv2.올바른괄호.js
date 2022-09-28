// https://school.programmers.co.kr/learn/courses/30/lessons/12909

function solution(s) {
  var answer = true;
  const stack = [];

  for (bracket of s) {
    if (stack.length === 0) {
      stack.push(bracket);
      continue;
    }

    if (bracket === "(") {
      stack.push(bracket);
    } else {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      }
    }
  }

  if (stack.length !== 0) {
    answer = false;
  }

  return answer;
}

// 모법답안
function solution(s) {
  let cum = 0;
  for (let paren of s) {
    cum += paren === "(" ? 1 : -1;
    if (cum < 0) {
      return false;
    }
  }
  return cum === 0 ? true : false;
}
