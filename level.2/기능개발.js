function solution(progresses, speeds) {
  let countBox = [];
  let completeBox = [];
  for (k = 1; k < 100; k++) {
    let complete = [];
    for (i = 0; i < progresses.length; i++) {
      if (typeof progresses[i] == 'number') progresses[i] += speeds[i];
      if (progresses[i] >= 100) {
        complete.push([i, k]);
        progresses.splice(i, 1, 'end');
      }
    }
    if (complete[0] != null) completeBox.push(...complete);
  }
  completeBox.sort((a, b) => a[0] - b[0]);

  console.log(completeBox);
  let count = 0;
  completeBox.reduce(
    (acc, cur, i) => {
      if (acc[0] < cur[1]) {
        if (i) countBox.push(count);
        acc[0] = cur[1];
        count = 0;
        count++;
      } else {
        count++;
      }
      if (completeBox.length == i + 1) countBox.push(count);
      return acc;
    },
    [0]
  );
  return countBox;
}

// 풀이 2

function solution(progresses, speeds) {
  const result = [];
  // 각 요일 마다 배포 가능한 개수
  let deployCount = 0;
  // 배포되는데 필요한 일수
  let maxDay = Math.ceil((100 - progresses[0]) / speeds[0]);

  for (let i = 0; i < progresses.length; i++) {
    // 개별 작업의 배포되는데 필요한 일수
    const day = Math.ceil((100 - progresses[i]) / speeds[i]);

    // 앞 작업에서 배포에 필요한 일수보다 뒷작업의 일수가 더 적으면 함께 배포된다.
    if (day <= maxDay) {
      deployCount++;
    } else {
      // 앞 작업에서 배포 일수를 충족하였는데 뒷 작업이 배포 할 수 없는 상황일 때
      result.push(deployCount);
      deployCount = 1;
      maxDay = day;
    }
  }

  result.push(deployCount);
  return result;
}
