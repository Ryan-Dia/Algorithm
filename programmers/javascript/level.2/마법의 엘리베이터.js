// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/148653

function solution(storey) {
  let answer = 0;
  const floor = 10;

  while (storey > 0) {
    const mod = storey % floor;

    if (mod < 5) {
      answer += mod;
      storey = Math.floor(storey / floor);
    }

    if (mod === 5) {
      const next = Math.floor(storey / floor);
      if (next % floor >= 5) {
        answer += 10 - mod;
        storey = Math.floor(storey / floor) + 1;
      } else {
        answer += mod;
        storey = Math.floor(storey / floor);
      }
    }

    if (mod > 5) {
      answer += 10 - mod;
      storey = Math.floor(storey / floor) + 1;
    }
  }
  return answer;
}
