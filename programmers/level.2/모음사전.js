// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/84512
// 문제 풀이 링크 : https://html-jc.tistory.com/688

function solution(word) {
  const first = {
    A: 1,
    E: 782,
    I: 1563,
    O: 2344,
    U: 3125,
  };

  const second = {
    A: 1,
    E: 157,
    I: 313,
    O: 469,
    U: 625,
  };

  const third = {
    A: 1,
    E: 32,
    I: 63,
    O: 94,
    U: 125,
  };

  const fourth = {
    A: 1,
    E: 7,
    I: 13,
    O: 19,
    U: 25,
  };

  const last = {
    A: 1,
    E: 2,
    I: 3,
    O: 4,
    U: 5,
  };

  const order = [first, second, third, fourth, last];

  return [...word].reduce((acc, letter, index) => {
    acc += order[index][letter];
    return acc;
  }, 0);
}
