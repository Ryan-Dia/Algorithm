// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42579#

function solution(genres, plays) {
  const result = [];

  // 1. 속한 노래가 많이 재생된 장르를 내림차순으로 배열안에 정렬
  const rank = genres.reduce((acc, cur, index) => {
    acc[cur] = (acc[cur] || 0) + plays[index];
    return acc;
  }, {});
  const rankInArr = Object.entries(rank)
    .sort(([_, a], [__, b]) => b - a)
    .map(([genre, play]) => genre);

  // 2. 각 장르 별로 재생횟수 상위 2개 노래만 저장
  const topMusic = genres.reduce((acc, cur, index) => {
    acc[cur] = acc[cur]
      ? [[plays[index], index], ...acc[cur]]
          .sort(([a, aIdx], [b, bIdx]) => {
            if (b - a !== 0) {
              return b - a;
            } else {
              return aIdx - bIdx;
            }
          })
          .slice(0, 2)
      : [[plays[index], index]];
    return acc;
  }, {});

  // 3. 가장 재생이 많이된 노래를 가지고 있는 장르부터 최대 2곡씩 배열안에 넣기
  rankInArr.forEach((value) => {
    if (topMusic[value].length === 2) {
      result.push(topMusic[value][0][1]);
      result.push(topMusic[value][1][1]);
    } else {
      result.push(topMusic[value][0][1]);
    }
  });
  return result;
}
