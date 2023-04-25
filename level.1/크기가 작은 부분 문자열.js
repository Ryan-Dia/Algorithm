// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/147355

// 풀이 1

function solution(t, p) {
  const pLength = p.length;
  let count = 0;
  const nobody = [...t].forEach((_, i) => {
    if (i <= t.length - pLength) {
      if (+t.slice(i, i + pLength) <= +p) {
        count += 1;
      }
    }
  });
  return count;
}

// 풀이 2

function solution(t, p) {
  const pLength = p.length;

  const substrings = [...t].reduce((acc, cur, i, arr) => {
    if (i <= arr.length - pLength) acc.push(t.slice(i, i + pLength));
    return acc;
  }, []);
  const result = substrings.filter((value) => +value <= +p);
  return result.length;
}

// 풀이 3

function solution(t, p) {
  let count = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    let value = t.slice(i, i + p.length);
    if (+p >= +value) count++;
  }
  return count;
}
