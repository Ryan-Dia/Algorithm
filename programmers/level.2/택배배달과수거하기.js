// 풀이 : https://html-jc.tistory.com/677
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/150369

function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  let deliveryCap = 0;
  let pickUpCap = 0;
  // 가장 먼 곳부터 체크
  for (let i = n - 1; i >= 0; i--) {
    deliveryCap += deliveries[i];
    pickUpCap += pickups[i];

    //
    while (deliveryCap > 0 || pickUpCap > 0) {
      deliveryCap -= cap;
      pickUpCap -= cap;
      answer += (i + 1) * 2;
    }
  }
  return answer;
}
