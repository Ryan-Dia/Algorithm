// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/135807

function solution(arrayA, arrayB) {
  let maxGCD = 0;
  let gcdA = arrayA[0];
  let gcdB = arrayB[0];

  for (let i = 1; i < arrayA.length; i++) {
    gcdA = calculateGCD(gcdA, arrayA[i]);
    gcdB = calculateGCD(gcdB, arrayB[i]);
  }

  if (gcdA === 1) gcdA = 0;
  if (gcdB === 1) gcdB = 0;

  if (arrayA.every((value) => value % gcdB !== 0)) {
    maxGCD = Math.max(maxGCD, gcdB);
  }
  if (arrayB.every((value) => value % gcdA !== 0)) {
    maxGCD = Math.max(maxGCD, gcdA);
  }

  return maxGCD;
}

function calculateGCD(n1, n2) {
  let remainder = n1 % n2;
  return n2 === 0 ? n1 : calculateGCD(n2, remainder);
}
