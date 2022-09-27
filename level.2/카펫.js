function solution(brown, yellow) {
  let y = 1;
  while (y < 2_000_000) {
    const result = y ** 2 - (2 + brown / 2) * y + brown + yellow;
    if (!result) break;
    y++;
  }
  return [brown / 2 + 2 - y, y];
}
