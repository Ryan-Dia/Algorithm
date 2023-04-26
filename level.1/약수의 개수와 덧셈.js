// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
  let count = 0;
  box = [];
  for (i = left; i <= right; i++) {
    for (k = 1; k <= i; k++) {
      if (i % k == 0) {
        count += 1;
      }
    }
    box.push([i, count]);
    count = 0;
  }
  const result = box.reduce((acc, cur) => {
    if (cur[1] % 2 === 0) {
      acc = acc + cur[0];
    } else {
      acc = acc - cur[0];
    }
    return acc;
  }, 0);
  return result;
}
