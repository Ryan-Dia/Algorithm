// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/178870

function solution(sequence, targetSum) {
  let [start, end] = [0, 0];
  let currentSum = sequence[0];
  let shortestRange = [0, sequence.length];

  while (start < sequence.length) {
    if (currentSum < targetSum && end < sequence.length) {
      currentSum += sequence[++end];
    } else if (
      currentSum === targetSum &&
      end - start < shortestRange[1] - shortestRange[0]
    ) {
      shortestRange = [start, end];
      currentSum += sequence[++end];
    } else {
      currentSum -= sequence[start++];
    }
  }

  return shortestRange;
}
