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
  if (yellow === 1) return [3, 3];
  let box = [];
  for (let i = 0; i < yellow; i++) {
    let divide = yellow / i;
    if (Number.isInteger(divide) && divide > 0) {
      box.push([i, divide]);
    }
  }
  if (box.length === 1) {
    box = box[0];
    box.sort((a, b) => b - a);
    return box.map((x) => +x + 2);
  }
  const choice = box.length % 2 ? Math.ceil(box.length / 2) - 1 : box.length / 2;

  const result = box[choice];
  return result.map((x) => +x + 2).sort((a, b) => b - a);
}
