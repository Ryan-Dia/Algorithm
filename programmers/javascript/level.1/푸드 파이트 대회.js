// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/134240

function solution(food) {
  var str = food.reduce((a, c, idx) => a + `${idx}`.repeat(~~c / 2), '');

  return str + '0' + [...str].reverse().join('');
}
