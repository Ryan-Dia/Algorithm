// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/132267

function solution(a, b, n) {
  let answer = 0;
  while (true) {
    if (Math.floor(n / a) === 0) {
      break;
    }
    answer += Math.floor(n / a) * b;
    n = (n % a) + Math.floor(n / a) * b;
  }
  return answer;
}
