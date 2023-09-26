// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/152996

function solution(weights) {
  let answer = 0;
  const map = new Map();
  const cals = [1, 2 / 3, 2 / 4, 3 / 4];
  weights
    .sort((a, b) => a - b)
    .forEach((value) => {
      cals.forEach((cal) => {
        if (map.has(value * cal)) {
          answer += map.get(value * cal);
        }
      });
      map.set(value, (map.get(value) || 0) + 1);
    });
  return answer;
}
