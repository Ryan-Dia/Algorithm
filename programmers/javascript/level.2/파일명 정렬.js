// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/17686
// 문제 풀이 설명 : https://html-jc.tistory.com/691

function solution(files) {
  files.sort((prev, cur) => {
    const regexpHead = /\D+/;
    const regexpNumber = /\d{1,5}/;
    const prevHead = prev.match(regexpHead)[0];
    const curHead = cur.match(regexpHead)[0];
    const prevNumber = prev.match(regexpNumber)[0];
    const curNumber = cur.match(regexpNumber)[0];
    const headCompared = prevHead.toLowerCase().localeCompare(curHead.toLowerCase());

    if (isNotSameHead(headCompared)) return headCompared;
    if (isSameNumber(prevNumber, curNumber)) return 0;
    return prevNumber - curNumber;
  });
  return files;
}

function isNotSameHead(headCompared) {
  return headCompared !== 0;
}

function isSameNumber(prevNumber, curNumber) {
  return prevNumber - curNumber === 0;
}
