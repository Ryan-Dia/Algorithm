function solution(k, m, score) {
  score.sort((a, b) => b - a);
  let result = 0;
  while (score.length >= m) {
    const data = score.splice(0, m);
    const calculate = data[m - 1] * m;
    result += calculate;
  }
  return result;
}
