// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12980

function solution(n) {
  let answer = 1;
  while (n > 1) {
    if (n % 2 === 0) n /= 2;
    else {
      n -= 1;
      answer++;
    }
  }
  return answer;
}
