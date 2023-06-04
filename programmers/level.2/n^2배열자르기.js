function solution(n, left, right) {
  let result = [];
  for (i = 0; i < n; i++) {
    let standard = i + 1;
    let line = [];
    for (k = 0; k < n; k++) {
      line[k] = standard <= k + 1 ? k + 1 : standard;
    }
    result.push(...line);
  }
  return result.slice(left, right + 1);
}
