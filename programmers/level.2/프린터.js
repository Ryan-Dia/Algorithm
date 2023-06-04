// https://school.programmers.co.kr/learn/courses/30/lessons/42587
function solution(priorities, location, result = 0) {
  const queue = priorities.map((p, i) => ({ priority: p, index: i }));

  while (queue.length > 0) {
    const current = queue.shift();
    const higherPriority = queue.some((d) => d.priority > current.priority);

    if (higherPriority) {
      queue.push(current);
      continue;
    }
    result++;
    if (current.index === location) {
      return result;
    }
  }
}

/* function solution(priorities, location) {
  if (priorities.length === 1) return 1;

  const prioritiesIndexed = shiftMaximumToFrontWithIndex(priorities);
  const sortPriorities = sortAccordingToImportance(prioritiesIndexed);
  const result = locateResultByLocation(sortPriorities, priorities, location);

  return result;
}

function shiftMaximumToFrontWithIndex(priorities, accIndex = 0) {
  const max = Math.max(...priorities);
  const prioritiesIndexed = priorities.reduce((acc, cur, index) => {
    if (max === cur || acc.filter((x) => Object.values(x).includes(max))[0]) {
      acc.splice(accIndex, 0, { [index]: cur });
      accIndex += 1;
      return acc;
    }
    acc.push({ [index]: cur });
    return acc;
  }, []);
  return prioritiesIndexed;
}

function sortAccordingToImportance(prioritiesIndexed, print = []) {
  if (!prioritiesIndexed.length) return print;
  const maxNumber = Math.max(...prioritiesIndexed.map((x) => Number(Object.values(x))));
  const firstNumber = Number(Object.values(prioritiesIndexed[0]));
  if (maxNumber === firstNumber) {
    print.push(prioritiesIndexed.shift());
  } else {
    prioritiesIndexed.push(prioritiesIndexed.shift());
  }
  return sortAccordingToImportance(prioritiesIndexed, print);
}

function locateResultByLocation(sortPriorities, priorities, location) {
  return sortPriorities.reduce((acc, cur, index) => {
    if (JSON.stringify(cur) === JSON.stringify({ [location]: priorities[location] })) acc = index + 1;
    return acc;
  }, null);
} */

console.log(solution([2, 1, 3, 2], 2) === 1);
console.log(solution([1, 1, 9, 1, 1, 1], 0) === 5);
console.log(solution([4, 5, 3, 5, 1], 2) === 4);
console.log(solution([2, 3, 3, 2, 9, 3, 3], 3) === 6);
console.log(solution([1, 1], 1) === 2);
console.log(solution([1], 0) === 1);

// 풀이 2

function solution(priorities, location) {
  // priorities에 index를 포함시켜서 2차원 배열로 바꾼다.
  const prioritiesWithIndex = priorities.map((priority, index) => [priority, index]);
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
