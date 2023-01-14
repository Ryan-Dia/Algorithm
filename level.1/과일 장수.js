Array.prototype.result = function (count) {
  let result = 0;
  for (let i = 0; i <= this.length - count; i += count) {
    const calculate = this[i + count - 1] * count;
    result += calculate;
  }
  return result;
};

function solution(k, m, score) {
  score.sort((a, b) => b - a);
  return score.result(m);
}
