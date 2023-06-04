function solution(numbers) {
  const answer = numbers
    // 두 개의 숫자를 조합했을 때 더 큰 수가 앞으로 가도록 정렬
    // string으로 더해야 숫자처럼 더해지지않고 옆으로 붙기에 string으로 변경 하고 비교한다.
    .sort((a, b) => b + '' + a - (a + '' + b))
    // 배열을 문자로 변경
    .join('');

  // 0으로만 이루어진 조합 판별
  return answer[0] === '0' ? '0' : answer;
}
