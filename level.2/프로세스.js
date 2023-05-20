// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42587
// 풀이 : https://html-jc.tistory.com/653

// 풀이 1

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

// 풀이 2

function solution(priorities, location) {
  const queue = [];
  priorities = priorities.map((priority, index) => [priority, index]);
  while (priorities.length) {
    const [priority, index] = priorities.shift();
    const higherImportance = priorities.findIndex(([value, _]) => value > priority);
    if (higherImportance === -1) {
      if (index === location) return queue.length + 1;
      queue.push([priority, index]);
      continue;
    }
    priorities.push([priority, index]);
  }
}

// 다른사람 풀이 (굿)

function solution(priorities, location) {
  let count = 0; // 처리된 프로세스 수
  let maxPriority = Math.max(...priorities); // 최대 우선순위

  while (true) {
    const currentProcess = priorities.shift(); // 대기중인 프로세스를 큐에서 꺼냄

    if (currentProcess === maxPriority) {
      count++; // 프로세스 실행
      if (location === 0) return count; // 찾고자 하는 프로세스일 경우 결과 반환
      maxPriority = Math.max(...priorities); // 최대 우선순위 갱신
    } else {
      priorities.push(currentProcess); // 큐에 다시 넣음
    }

    location = location === 0 ? priorities.length - 1 : location - 1; // 위치 조정
  }
}
