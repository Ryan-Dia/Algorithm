// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/17687

function solution(n, t, m, p) {
  let index = 0;
  let numbers = '';
  let result = '';

  // 미리 구할 숫자의 개수를 만족하면 while 종료
  while (result.length < t) {
    const limitLengthOfNumbers = t * m;
    if (numbers.length < limitLengthOfNumbers) {
      // n 진법으로 변경
      numbers += index.toString(n).toUpperCase();
    }

    const order = (index % m) + 1;
    const isTubeTurn = order === p;
    if (isTubeTurn) {
      result += numbers[index];
    }

    index += 1;
  }
  return result;
}
