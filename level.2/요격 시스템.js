// 링크 :https://school.programmers.co.kr/learn/courses/30/lessons/181188
// 풀이 : https://html-jc.tistory.com/667

function solution(targets) {
  let interceptorMissileCount = 0;
  let previousTargetMaxX = -1;

  targets.sort((prev, cur) => prev[1] - cur[1]);

  targets.forEach((target) => {
    const [minX, maxX] = target;
    if (previousTargetMaxX <= minX) {
      previousTargetMaxX = maxX;
      interceptorMissileCount += 1;
    }
  });
  return interceptorMissileCount;
}
