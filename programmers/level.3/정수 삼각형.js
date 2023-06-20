// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/43105
// 해설 링크 : https://html-jc.tistory.com/685

// python

def solution(triangle):
    for i in range(1, len(triangle)):
        for j in range(len(triangle[i])):
            firstCase = triangle[i - 1][j - 1] if j > 0 else 0
            secondCase = triangle[i - 1][j] if j < len(triangle[i - 1]) else 0

            if secondCase >= firstCase:
                triangle[i][j] += secondCase
            else:
                triangle[i][j] += firstCase

    return max(triangle[-1])

// js

function solution(triangle) {
    for (let i = 1; i < triangle.length; i++) {
      for (let j = 0; j < triangle[i].length; j++) {
        const firstCase = triangle[i - 1][j - 1] ?? 0;
        const secondCase = triangle[i - 1][j] ?? 0;
  
        if (secondCase >= firstCase) {
          triangle[i][j] += secondCase;
          continue;
        }
        triangle[i][j] += firstCase;
      }
    }
    return Math.max(...triangle.at(-1));
  }