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
