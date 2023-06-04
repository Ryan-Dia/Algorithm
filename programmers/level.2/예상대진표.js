function solution(n, a, b) {
  if (n === 2) return 1;
  if (a <= n / 2 && b <= n / 2) return solution(n / 2, a, b);
  else if (a > n / 2 && b > n / 2) return solution(n, a - n / 2, b - n / 2);
  else if ((a > n / 2 && b <= n / 2) || (a <= n / 2 && b > n / 2))
    return Math.log2(n);
}
