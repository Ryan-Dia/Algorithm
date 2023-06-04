// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
  var answer = 0;
  const 뽑아야하는포켓몬수 = Math.floor(nums.length / 2);
  const 객체로변환 = nums.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  const 포켓몬종류수 = Object.keys(객체로변환).length;
  return 뽑아야하는포켓몬수 < 포켓몬종류수 ? 뽑아야하는포켓몬수 : 포켓몬종류수;
}
