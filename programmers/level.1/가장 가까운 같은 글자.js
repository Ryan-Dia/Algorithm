// 문제 링크 :  https://school.programmers.co.kr/learn/courses/30/lessons/142086#
function solution(s) {
  const result = [];
  const numberDict = {};
  const characters = [...s];
  characters.forEach((character, index) => {
    numberDict[character] !== undefined
      ? result.push(index - numberDict[character])
      : result.push(-1);
    numberDict[character] = index;
  });
  return result;
}

// 문제
/*
    s는 영어 소문자로만 이루어져있다.
    1<= s <= 10,000
    return number[]
*/

// 실수
/**
 * 처음에 아래처럼 해서 에러가났다.
 * numberDict[character] ? ~ : ~
 * numberDict[character] = 0   -> 이 케이스도 고려해줘야하기 때문이다.
 */
