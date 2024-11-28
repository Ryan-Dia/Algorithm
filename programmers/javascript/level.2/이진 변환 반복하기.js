// 문제 링크 :  https://school.programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
  let count = 0;
  let totalLengthWithoutZero = 0;

  while (s.length > 1) {
    const stringWithoutZero = s.replace(/0/g, '');
    const stringLength = stringWithoutZero.length;
    count += 1;
    totalLengthWithoutZero += s.length - stringLength;
    const stringConvertedToBinary = stringLength.toString(2);
    s = stringConvertedToBinary;
  }
  return [count, totalLengthWithoutZero];
}
