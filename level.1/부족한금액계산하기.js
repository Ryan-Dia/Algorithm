function solution(price, money, count) {
  let result = money;
  for (i = 1; i <= count; i++) {
    result -= price * i;
  }
  return result > 0 ? 0 : Math.abs(result);
}
