// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/159994

function solution(cards1, cards2, goal) {
  const answer = 'Yes';
  const goalLength = goal.length;

  for (let i = 0; i < goalLength; i++) {
    if (goal[i] === cards1[0]) {
      cards1.shift();
      continue;
    }
    if (goal[i] === cards2[0]) {
      cards2.shift();
      continue;
    }
    return 'No';
  }

  return answer;
}
