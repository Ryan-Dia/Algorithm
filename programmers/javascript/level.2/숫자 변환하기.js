// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/154538

function solution(x, y, n) {
  if (x >= y) return 0;

  const dp = Array(y + 1).fill(Infinity);
  dp[x] = 0;

  for (let i = x + 1; i <= y; i++) {
    const subtractN = x <= i - n ? dp[i - n] + 1 : Infinity;
    const divideBy2 = i % 2 === 0 && x <= i / 2 ? dp[i / 2] + 1 : Infinity;
    const divideBy3 = i % 3 === 0 && x <= i / 3 ? dp[i / 3] + 1 : Infinity;

    dp[i] = Math.min(subtractN, divideBy2, divideBy3);
  }

  return dp[y] === Infinity ? -1 : dp[y];
}
