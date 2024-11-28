// 풀이 :https://html-jc.tistory.com/651
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42586

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

//풀이 3

function solution(progresses, speeds) {
  const result = [];
  while (progresses.length) {
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }

    let count = 0;
    while (progresses.length > 0 && progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      count += 1;
    }
    if (count > 0) result.push(count);
  }
  return result;
}

// 풀이 4

function solution(progresses, speeds) {
  const result = [];
  while (progresses.length) {
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }
    if (progresses[0] >= 100) {
      let imcomplete = progresses.findIndex((progress) => progress < 100);
      if (imcomplete === -1) {
        result.push(progresses.length);
        return result;
      }
      progresses.splice(0, imcomplete);
      speeds.splice(0, imcomplete);
      result.push(imcomplete);
    }
  }
  return result;
}
