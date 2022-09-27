// https://www.acmicpc.net/problem/1620

//해시를 사용한 집합과 맵
//우선 객체를 2개 만들어 숫자를 키로 가지고 있는 객체, 이름을 키로 가지고 있는 객체를 만들었는데
// 객체 하나로 만들어서 하는게 더 좋은 건가?
// 그럼 value로 찾을 땐 해시 테이블의 장점을 가져가지 못하는데..
// 고민쓰

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
const numDictionary = {};
const nameDictionary = {};
let answer = "";

rl.on("line", function (line) {
  input.push(line.split(" "));
}).on("close", function () {
  solution(input);
  console.log(answer);
  process.exit();
});

function solution(arr) {
  const bookLength = parseInt(arr[0][0]);
  // const problemsNum = arr[0][1]

  arr.slice(1, bookLength + 1).map((el, index) => {
    numDictionary[parseInt(index) + 1] = el[0];
    nameDictionary[el[0]] = parseInt(index) + 1;
  });

  arr.slice(bookLength + 1).map((el) => {
    //string인 경우
    if (
      //아스키코드
      (el[0].charCodeAt(0) >= 65 && el[0].charCodeAt(0) <= 90) ||
      (el[0].charCodeAt(0) >= 97 && el[0].charCodeAt(0) <= 122)
    ) {
      answer += nameDictionary[el[0]] + "\n";
    } else {
      //number인 경우
      answer += numDictionary[el[0]] + "\n";
    }
  });
}
