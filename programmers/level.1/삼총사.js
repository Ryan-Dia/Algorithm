// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/131705

// 풀이 1

function solution(number) {
  let count = 0;
  for (let i = 0; i < number.length - 2; i++) {
    for (let j = i + 1; j < number.length - 1; j++) {
      for (let k = j + 1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] === 0) {
          count += 1;
        }
      }
    }
  }
  return count;
}

// 풀이 2

function solution(number) {
  let answer = 0;
  function dfs(idx, count, sum) {
    // end
    if (idx > number.length) {
      return;
    }

    // count === 3이면 함수 종료
    if (count === 3) {
      !sum && (answer += 1);
      return;
    }

    // 해당 깊이 끝까지
    dfs(idx + 1, count + 1, sum + number[idx]);
    // 다른 깊이 시작
    dfs(idx + 1, count, sum);
  }
  dfs(0, 0, 0);
  return answer;
}
