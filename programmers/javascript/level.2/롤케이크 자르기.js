// 문제 링크 :https://school.programmers.co.kr/learn/courses/30/lessons/132265

function solution(topping) {
  let answer = 0;
  const olderBrother = new Array(topping.length).fill(0); // 형의 종류의 수를 저장할 배열
  const youngerBrother = new Array(topping.length).fill(0); // 동생의 종류의 수를 저장할 배열
  const menuCount = new Set();

  for (let i = 0; i < topping.length; i++) {
    // 형이 (i+1)개를 먹었을 때의 종류의 수
    menuCount.add(topping[i]);
    olderBrother[i] = menuCount.size;
  }

  menuCount.clear();

  for (let i = topping.length - 1; i >= 0; i--) {
    // 형이 (i+1)개를 먹었을 때의 동생의 종류의 수
    menuCount.add(topping[i]);
    youngerBrother[i] = menuCount.size;
  }

  for (let i = 0; i < topping.length - 1; i++) {
    // 형이 (i+1)개를 먹었을 때 형과 동생의 종류의 수 비교
    if (olderBrother[i] === youngerBrother[i + 1]) {
      answer++;
    }
  }

  return answer;
}
