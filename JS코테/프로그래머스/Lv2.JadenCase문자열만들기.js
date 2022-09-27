// https://school.programmers.co.kr/learn/courses/30/lessons/12951

function solution(s) {
  return s
    .toLowerCase()
    .split(" ")
    .map((i) => i.charAt(0).toUpperCase() + i.slice(1))
    .join(" ");
}

function anothorSolution(s) {
  var answer = "";

  let arr = s.split(" ");

  const newArr = arr.map((word) => {
    if (word === "") return "";
    let firstStr = "";
    let restStr = "";
    if (word.charCodeAt(0) >= 97 && word.charCodeAt(0) <= 122) {
      firstStr = String.fromCharCode(parseInt(word.charCodeAt(0)) - 32);
    } else {
      firstStr = word[0];
    }

    for (let i = 1; i < word.length; i++) {
      if (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) {
        restStr += String.fromCharCode(parseInt(word.charCodeAt(i)) + 32);
      } else {
        restStr += word[i];
      }
    }

    return firstStr + restStr;
  });

  answer = newArr.join(" ");

  return answer;
}
