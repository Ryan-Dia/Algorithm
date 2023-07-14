// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/68645

function solution(n) {
  let answer = [];
  let count = 0;
  let arr = Array.from({ length: n }, (_, index) => Array(index + 1).fill(0));
  let currentX = -1;
  let currentY = 0;
  while (n > 0) {
    for (let i = 0; i < n; i++) {
      currentX++;
      count++;
      arr[currentX][currentY] = count;
    }
    for (let i = 0; i < n - 1; i++) {
      currentY++;
      count++;
      arr[currentX][currentY] = count;
    }
    for (let i = 0; i < n - 2; i++) {
      currentX--;
      currentY--;
      count++;
      arr[currentX][currentY] = count;
    }
    n -= 3;
  }

  for (let i = 0; i < arr.length; i++) {
    answer = [...answer, ...arr[i]];
  }

  return answer;
}
