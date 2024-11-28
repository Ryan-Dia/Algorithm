// https://school.programmers.co.kr/learn/courses/30/lessons/161989?language=javascript

// 잘못된 풀이
// 예제는 통과하지만 필요없는 구역도 칠해버림

function solution(n, m, section) {
  // 1. early return 먼저 제거

  // 1) 롤러의 길이가 1이면 result = n 이 된다.
  if (m === 1) return n;

  // 2. 나머지 경우

  // 1) section에서 첫 번째 index와 마지막 index의 숫자를 가져온다.
  const firstIndexNum = section[0];
  const lastIndexNum = section.at(-1);
  let length = lastIndexNum - firstIndexNum + 1;
  let result = 0;
  while (length > 0) {
    length -= m;
    result += 1;
  }
  return result;
}

// 풀이 1
// 처리시간이 너무 오래 걸림
function solution(n, m, section) {
  // 1. early return 먼저 제거

  // 1) 롤러의 길이가 1이면 result = section.length 이 된다.
  if (m === 1) return section.length;

  let result = 0;
  while (section.length) {
    const removed = Array.from({ length: m }, (v, i) => section[0] + i);
    section = section.filter((value) => !removed.includes(value));
    result += 1;
  }
  return result;
}

// 풀이 2
// 시간단축

// 풀이 2
// 시간단축

function solution(n, m, section) {
  // 1. early return 먼저 제거
  // 1) 롤러의 길이가 1이면 result = section.length 이 된다.
  if (m === 1) return section.length;

  let result = 0;
  while (section.length) {
    const lastRollerNumber = section[0] + m - 1;
    const overIndex = section.findIndex(
      (sectionNumber) => sectionNumber > lastRollerNumber
    );

    //  -1은 못 찾았다는 것이고 그 뜻은 더 이상의 롤러를 필요하지않다
    // 다시말해 마지막 페인트칠 이라는 뜻이다.
    if (overIndex === -1) {
      result += 1;
      break;
    }
    section.splice(0, overIndex);
    result += 1;
  }
  return result;
}
