function solution(priorities, location) {
  let num = 0;
  const sample = priorities.reduce((acc, cur, index, arr) => {
    const max = Math.max(...arr);
    if (max === cur || acc.filter((x) => Object.values(x).includes(max))[0]) {
      acc.splice(num, 0, { [index]: cur });
      num += 1;
      return acc;
    }
    cur <= arr[index + 1] ? acc.push({ [index]: cur }) : acc.unshift({ [index]: cur });
    return acc;
  }, []);
  return sample.reduce((acc, cur, index) => {
    if (cur[location]) acc = index + 1;
    return acc;
  }, 0);
}
