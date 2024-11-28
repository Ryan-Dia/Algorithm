// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/118666

function solution(survey, choices) {
  const scores = getScoresByPersonalityType(survey, choices);
  const resultOfPersonalityTypeTest = calculateScores(scores);
  return resultOfPersonalityTypeTest;
}

function getScoresByPersonalityType(survey, choices) {
  // 성격 유형별 점수
  const scores = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  for (let i = 0; i < survey.length; i++) {
    // 모르겠다로 응답했으면 점수 계산 할 필요가 없다.
    if (choices[i] === 4) continue;
    // 비동의쪽으로 응답했을 때
    if (choices[i] < 4) {
      // survey 왼쪽 캐릭터의 점수를  4 - choices[i] 만큼 올린다.
      // 매우 비동의 : 3점, 비동의 : 2점, 약간 비동의 : 1점이기에  4 - choices[i]를 해줌
      scores[survey[i][0]] += 4 - choices[i];
    } else {
      // 동의쪽으로 응답했을 때
      scores[survey[i][1]] += choices[i] - 4;
    }
  }
  // 계산된 scores 객체 return
  return scores;
}

function calculateScores(scores) {
  let result = ''; // 성격 유형 테스트 결과
  // 1번 지표, 2번 지표, 3번 지표, 4번 지표 순서대로 배열 생성
  const order = ['R', 'T', 'C', 'F', 'J', 'M', 'A', 'N'];

  // n번 지표에서 점수가 더 큰 성격 유형을 result에 넣기
  for (let i = 0; i < order.length; i += 2) {
    // n번 지표에서 성격 유형 점수가 같을 때
    if (scores[order[i]] === scores[order[i + 1]]) {
      // 사전 순으로 빠른 성격 유형을 검사자의 성격 유형으로 판단
      result += order[i];
      continue;
    }
    // n번 지표에서 성격 유형 검사 점수들이 크거나 작을 때
    // 점수가 더 큰 성경 유형을 결과에 반영
    scores[order[i]] > scores[order[i + 1]]
      ? (result += order[i])
      : (result += order[i + 1]);
  }
  return result;
}
