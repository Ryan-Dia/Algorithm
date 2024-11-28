// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42579#
// 풀이 링크 : https://html-jc.tistory.com/660

// 풀이 1
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

// 풀이 2

function solution(genres, plays) {
  // 장르 순위구하기 (내림차순)
  const genreRanking = calculateGenreRanking(genres, plays);

  // 각 장르별 탑2 선정  고유번호로 간직
  const topTwoPlayWithGenres = getTopTwoPlayWithGenres(genres, plays);

  return genreRanking.reduce((acc, genre) => {
    acc.push(...topTwoPlayWithGenres[genre]);
    return acc;
  }, []);
}

function calculateGenreRanking(genres, plays) {
  const genreDict = genres.reduce((acc, genre, index) => {
    acc[genre] = (acc[genre] || 0) + plays[index];
    return acc;
  }, {});
  const genreRanking = Object.entries(genreDict);
  genreRanking.sort(([_, a], [__, b]) => b - a);
  const genreRankingResult = genreRanking.map(([genre, play]) => genre);
  return genreRankingResult;
}

function getTopTwoPlayWithGenres(genres, plays) {
  const genrePlays = genres.reduce((acc, genre, index) => {
    acc[genre]
      ? acc[genre].push([plays[index], index])
      : (acc[genre] = [[plays[index], index]]);
    return acc;
  }, {});

  // 이미 처음 만들때 부터 인덱스가 낮은 순서대로 정렬되어있어서 노래재생 횟수가 같은 노래중에서 고유번호 낮게 정렬은 신경 안 써도 된다.
  for (let genre in genrePlays) {
    genrePlays[genre] = genrePlays[genre]
      .sort(([playA, _], [playB, __]) => playB - playA)
      .slice(0, 2)
      .map(([play, uniqueNumber]) => uniqueNumber);
  }
  return genrePlays;
}
