function solution(arr) {
  const answer = [0, 0];
  const m = arr.length;

  const check = (sx, sy, length) => {
    const first = arr[sx][sy];
    const half = Math.floor(length / 2);

    for (let i = sx; i < sx + length; i++) {
      for (let j = sy; j < sy + length; j++) {
        if (arr[i][j] !== first) {
          check(sx, sy, half);
          check(sx + half, sy, half);
          check(sx, sy + half, half);
          check(sx + half, sy + half, half);
          return;
        }
      }
    }
    answer[first]++;
  };
  check(0, 0, m);

  return answer;
}
