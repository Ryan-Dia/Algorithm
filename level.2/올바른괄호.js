function solution(s) {
  let sum = 0;

  // 처음이 ")" or 마지막이 "(" 라면 Early 리턴
  if (s[0] === ')' || s.at(-1) === '(') return false;
  for (i = 0; i < s.length; i++) {
    // sum < 0 낮으면 "(" 보다 ")" 많다는 뜻이기에 그렇기되면 짝이 맞지 않는다. 따라서 false
    if (sum < 0) return false;
    // "(" 이면 +1   ")" 이면 -1
    s[i] === '(' ? (sum += 1) : (sum -= 1);
  }
  // 최종적으로 sum === 0 이면 true 0이 아니면 짝이 맞지 않기에 false
  return sum === 0;
}
