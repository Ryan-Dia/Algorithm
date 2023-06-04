function solution(n, words) {
  let count = 0;
  words.reduce((acc, cur, i, arr) => {
    if (i !== 0) {
      if (cur[0] !== acc[i - 1][acc[i - 1].length - 1]) {
        count = i + 1;
        return arr.splice(1);
      }
      if (acc.find((x) => x === cur)) {
        count = i + 1;
        return arr.splice(1);
      }
    }
    acc[i] = cur;
    return acc;
  }, []);
  let order;
  if (count <= n) order = count;
  else {
    if (count % n === 0) order = n;
    else order = count % n;
  }
  return count ? [order, Math.ceil(count / n)] : [0, 0];
}
