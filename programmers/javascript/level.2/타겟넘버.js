// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/43165

function solution(numbers, target) {
  let answer = 0;
  dfs(0, 0);
  function dfs(index, sum) {
    if (index === numbers.length) {
      if (sum === target) answer++;
      return;
    }
    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  }
  return answer;
}
