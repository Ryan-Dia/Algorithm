// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12936

function solution(n, k) {
  const answer = [];

  const factorial = (num) => {
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
  };

  const people = Array.from({ length: n }, (_, i) => i + 1);

  while (people.length > 0) {
    const fact = factorial(people.length - 1);
    const index = Math.floor((k - 1) / fact);

    answer.push(people.splice(index, 1)[0]);
    k %= fact;
  }

  return answer;
}
