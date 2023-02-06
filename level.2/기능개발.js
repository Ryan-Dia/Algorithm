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
