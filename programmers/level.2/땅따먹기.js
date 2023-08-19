// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12913
// 풀이 설명: https://html-jc.tistory.com/683

// 풀이 1
function solution(land) {
  const length = land.length;

  for (let i = 1; i < length; i++) {
    land[i][0] += Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][3]);
    land[i][1] += Math.max(land[i - 1][0], land[i - 1][2], land[i - 1][3]);
    land[i][2] += Math.max(land[i - 1][1], land[i - 1][0], land[i - 1][3]);
    land[i][3] += Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][0]);
  }

  return Math.max(...land[length - 1]);
}

// 풀이 2

function solution(land) {
  const removeColumnUsed = (arr, index) => (arr[index] = 0);
  const getMaxScore = (row, index) => {
    const rowCopy = [...row];
    removeColumnUsed(rowCopy, index);
    return Math.max(...rowCopy);
  };

  for (let i = 1; i < land.length; i++) {
    land[i][0] += getMaxScore(land[i - 1], 0);
    land[i][1] += getMaxScore(land[i - 1], 1);
    land[i][2] += getMaxScore(land[i - 1], 2);
    land[i][3] += getMaxScore(land[i - 1], 3);
  }

  return Math.max(...land.at(-1));
}
