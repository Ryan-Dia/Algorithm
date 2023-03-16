// https://school.programmers.co.kr/learn/courses/30/lessons/155652

function solution(s, skip, index) {
  const dict = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 97));
  const newDict = dict.filter((word) => ![...skip].includes(word));
  return [...s]
    .map((word) => newDict[(newDict.indexOf(word) + index) % newDict.length])
    .join('');
}
