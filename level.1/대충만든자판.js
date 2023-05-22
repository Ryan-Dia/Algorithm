// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/160586
// 풀이 : https://html-jc.tistory.com/manage/posts/

function solution(keymap, targets) {
  let count = 0; // 해당 알파벳을 작성하기 위해 키를 최소 몇 번 눌러야하는지 횟수
  const result = [];

  // 1. 최소 keymap 객체  ( 각 알파벳별로 최소로 누를 수 있는 횟수 저장)
  const keymapBox = keymap.reduce((acc, cur) => {
    [...cur].forEach((alphabet, index) => {
      //  해당 알파벳의 최소로 누를 수 있는 횟수 < index + 1
      // 최소로 누를 수 있는 횟수가 1부터이니 index + 1
      acc[alphabet] = acc[alphabet] < index + 1 ? acc[alphabet] : index + 1;
    });
    return acc;
  }, {});

  // 2. targets에 있는 각 알파벳을 keymapBox를 통해 각 target별로 최소 몇 번씩 눌러야 하는지 계산
  for (let i = 0; i < targets.length; i++) {
    for (let j = 0; j < targets[i].length; j++) {
      // count += 해당 알파벳의 횟수
      count += keymapBox[targets[i][j]];
    }
    // 목표 문자열을 작성할 수 없을 때는 -1을 push
    result.push(count ? count : -1);
    // count 초기화
    count = 0;
  }
  return result;
}
