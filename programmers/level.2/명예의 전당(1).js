// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/138477

function solution(k, score) {
  let ret = [];
  let answer = [];

  for (const scr of score) {
    ret.push(scr);
    const min = Math.min(...ret);
    if (ret.length > k) ret.splice(ret.indexOf(min), 1);
    answer.push(Math.min(...ret));
  }

  return answer;
}
