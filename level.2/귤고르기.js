// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/138476

function solution(k, tangerine) {
  const countEachSize = tangerine.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  const numberOfEachSize = Object.values(countEachSize).sort((a, b) => b - a);

  let sum = 0;
  let count = 0;
  const NumberToPack = k;
  while (sum < NumberToPack) {
    sum += numberOfEachSize[count++];
  }
  return count;
}
