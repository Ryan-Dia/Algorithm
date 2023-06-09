// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42578

function solution(clothes) {
  let box = [];
  let classification = clothes.reduce((acc, cur) => {
    acc[cur[1]] = (acc[cur[1]] || 0) + 1;
    return acc;
  }, {});
  for (let item in classification) box.push(classification[item] + 1);
  return box.reduce((a, b) => a * b) - 1;
}
