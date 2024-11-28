// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42883

const solution = (number, k) => {
  const stack = [];
  for (let i = 0; i < number.length; i++) {
    const now = number[i];
    while (k > 0 && stack[stack.length - 1] < now) {
      stack.pop();
      k -= 1;
    }
    stack.push(now);
  }
  // 하나의 숫자로만 이루어진경우 때문에 slice 추가
  return stack.slice(0, number.length - k).join('');
};
