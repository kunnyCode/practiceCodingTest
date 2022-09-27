// https://school.programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
  var answer = [];
  let binaryStr = s;
  let iterTimes = 0;
  let numOfZero = 0;

  while (binaryStr !== "1") {
    iterTimes++;
    let newStr = "";

    for (let char of binaryStr) {
      if (char === "0") {
        numOfZero++;
      } else {
        newStr += "1";
      }
    }

    binaryStr = newStr.length.toString(2);
  }

  answer.push(iterTimes);
  answer.push(numOfZero);

  return answer;
}

//모범답안
function solution(s) {
  var answer = [0, 0];
  while (s.length > 1) {
    answer[0]++;
    answer[1] += (s.match(/0/g) || []).length;
    s = s.replace(/0/g, "").length.toString(2);
  }
  return answer;
}
