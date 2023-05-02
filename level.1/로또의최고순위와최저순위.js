// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let minCount = lottos.filter((v) => win_nums.includes(v)).length;
  let zeroCount = lottos.filter((v) => !v).length;
  console.log(zeroCount);

  const maxCount = minCount + zeroCount;

  return [rank[maxCount], rank[minCount]];
}
