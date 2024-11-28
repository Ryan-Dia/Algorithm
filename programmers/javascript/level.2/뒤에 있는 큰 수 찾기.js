// 문제 링크 :  https://school.programmers.co.kr/learn/courses/30/lessons/154539
// 문제 풀이 설명 : https://html-jc.tistory.com/694

// 풀이 1

function solution(numbers) {
  const result = new Array(numbers.length).fill(-1);
  const stack = [];
  for (let i = 0; i < numbers.length; i++) {
    while (numbers[i] > numbers[stack.at(-1)]) {
      const index = stack.pop();
      result[index] = numbers[i];
    }

    stack.push(i);
  }
  return result;
}

// 풀이 2

function solution(numbers) {
  let answer = Array(numbers.length).fill(-1);

  // 뒤에서부터 차례대로 순회한다.
  // j 는 i보다 한칸 앞이다.
  for (let i = numbers.length - 2; i >= 0; i--) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] < numbers[j]) {
        answer[i] = numbers[j];
        break;
      }

      // 나보다 더 큰 숫자 없다는 뜻
      if (answer[j] === -1) break;

      // 같은숫자가 중첩으로 있을 때 불필요한 계산을 막기위해
      if (numbers[i] < answer[j]) {
        answer[i] = answer[j];
        break;
      }
    }
  }
  return answer;
}
