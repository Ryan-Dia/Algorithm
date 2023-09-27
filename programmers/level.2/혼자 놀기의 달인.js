// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/131130

function solution(cards) {
  let maxScore = 0;

  cards.forEach((card, index) => {
    const opened = Array(cards.length).fill(false);
    const firstGroup = openBoxes(index, opened, cards);
    for (let i = 0; i < cards.length; i++) {
      if (opened[i]) {
        continue;
      }
      const secondGroup = openBoxes(i, opened, cards);
      maxScore = Math.max(maxScore, firstGroup * secondGroup);
    }
  });

  return maxScore;
}

function openBoxes(start, opened, cards) {
  let box = start;
  let count = 0;
  while (!opened[box]) {
    opened[box] = true;
    box = cards[box] - 1;
    count++;
  }
  return count;
}
