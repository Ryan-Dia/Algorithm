// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/77885

function solution(numbers) {
  return numbers.map((number) => {
    if (number % 2 === 0) return number + 1;
    const pivot = [...number.toString(2)];
    const zeroIndex = pivot.lastIndexOf('0');
    if (zeroIndex === -1) {
      pivot.shift();
      pivot.unshift('10');
    }
    if (zeroIndex !== -1) {
      pivot[zeroIndex] = 1;
      pivot[zeroIndex + 1] = 0;
    }
    return parseInt(pivot.join(''), 2);
  });
}
