// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42587

function solution(priorities, location) {
  // priorities에 index를 포함시켜서 2차원 배열로 바꾼다.
  const prioritiesWithIndex = priorities.map((priority, index) => [priority, index]);
  console.log(prioritiesWithIndex);
  // 우선순위를 재정렬한다.
  const newPriorities = rearrangePriorities(prioritiesWithIndex);
  // location과 재정렬 하기전 index가 같은면 재정렬된 index + 1을 return 한다.
  return newPriorities.findIndex(([_, index]) => index === location) + 1;
}

function rearrangePriorities(priorities) {
  const stack = [];
  let index = 0;
  // priorities가 값이 존재하지 않을 때 까지 반복
  while (priorities.length) {
    // priorities의 첫번 째 값은 priority 두 번째 값은 재정렬하기전 index이다.
    // 맨 앞에 있는 priority의 값이 priorites전체 최대값과 같을 때
    if (
      priorities[0][0] ===
      Math.max.apply(
        null,
        priorities.map((el) => el[0])
      )
    ) {
      // 맨 앞에서 값을 빼서 stack에 넣어준다.
      stack.push(priorities.shift());
      index = 0;
      continue;
    }
    // 그외 모든 priority 값은 앞에서 뺀뒤 맨 뒤로 다시 보낸다.
    priorities.push(priorities.shift());
    index += 1;
  }
  return stack;
}
