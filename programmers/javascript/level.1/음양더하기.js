// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
  const result = absolutes.reduce((pre, cur, i) => {
    if (signs[i]) {
      pre.push(cur);
    } else {
      pre.push(-1 * cur);
    }

    return pre;
  }, []);
  return result.reduce((pre, cur) => pre + cur, 0);
}
