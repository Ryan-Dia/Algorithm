function solution(brown, yellow) {
  let y = 1;
  while (y < 2_000_000) {
    const result = y ** 2 - (2 + brown / 2) * y + brown + yellow;
    if (!result) break;
    y++;
  }
  return [brown / 2 + 2 - y, y];
}

// 풀이 추가

function solution(brown, yellow) {
  let divisor = getDivisor(yellow);

  const result = divisor.filter(([a, b]) => {
    const case1 = (a + 2) * (b + 2) === brown + yellow;
    const case2 = a * b === yellow;
    return case1 && case2;
  });
  return result[0].map((x) => x + 2).sort((a, b) => b - a);
}

function getDivisor(yellow) {
  const arr = [];
  for (let i = 0; i <= yellow; i++) {
    const divide = yellow / i;
    if (Number.isInteger(divide)) {
      arr.push([i, divide]);
    }
  }
  return arr;
}
