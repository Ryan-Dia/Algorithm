// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42584

function solution(prices) {
  const pricesLength = prices.length; // 3곳에서 사용되기에 변수에 할당
  const result = [];

  for (let cur = 0; cur < pricesLength - 1; cur++) {
    // 주가 하락이 발생하는 시점까지 몇초 유지하는지 체크
    for (let next = cur + 1; next < pricesLength; next++) {
      // 최소 1초
      result[cur] = (result[cur] || 0) + 1;

      // 주가 하락
      if (prices[cur] > prices[next]) {
        break;
      }
    }
  }
  // 마지막은 다음 주식가격 데이터가 없기에 0초로 고정
  result[pricesLength - 1] = 0;
  return result;
}
