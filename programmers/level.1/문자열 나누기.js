// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/140108

function solution(s) {
  let first = [];
  let second = [];
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (!first.length) {
      first.push(s[i]);
    } else {
      if (first.includes(s[i])) {
        first.push(s[i]);
      } else {
        second.push(s[i]);
      }
    }

    if (first.length === second.length) {
      result += 1;
      first = [];
      second = [];
    }
  }

  if (first.length) {
    result += 1;
  }

  return result;
}
