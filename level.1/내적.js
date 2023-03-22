//school.programmers.co.kr/learn/courses/30/lessons/70128
https: function solution(a, b) {
  let sum = 0;
  for (i = 0, k = 0; i < a.length, k < b.length; i++, k++) {
    sum += a[i] * b[k];
  }

  return sum;
}
