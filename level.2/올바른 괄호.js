// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12909

function solution(s) {
  let sum = 0;
  // 안되는 경우 early return
  if (s[0] === ')' || s.at(-1) === '(') return false;

  for (i = 0; i < s.length; i++) {
    // 합이 0 이면서 ")"로 시작하면 false 즉  sum < 0 이면 false
    if (sum === 0 && s[i] === ')') return false;
    s[i] === '(' ? (sum += 1) : (sum -= 1);
  }
  // 합이 0이면 true 아니면 false
  return sum === 0;
}
