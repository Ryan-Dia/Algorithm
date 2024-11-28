function solution(n) {
  let count = 0;

  for (k = 1; k <= n; k++) {
    let sum = 0;
    for (i = k; i <= n; i++) {
      sum += i;
      if (sum >= n) {
        if (sum === n) count++;
        break;
      }
    }
  }
  return count;
}
