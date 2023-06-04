// 링크 :https://school.programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
  let box = [];
  for (i = 0; i < numbers.length; i++) {
    for (k = i + 1; k < numbers.length; k++) {
      box.push(numbers[i] + numbers[k]);
    }
  }

  let result = new Set(box.sort((a, b) => a - b));
  return [...result];
}
