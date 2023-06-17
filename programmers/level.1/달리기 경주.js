// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/178871
// 문제 풀이 : https://html-jc.tistory.com/679

function solution(players, callings) {
  const dict = players.reduce((acc, cur, index) => {
    acc[cur] = index;
    return acc;
  }, {});

  callings.forEach((player) => {
    const curPlayerIndex = dict[player];

    // 앞선수
    const nextPlayer = players[curPlayerIndex - 1];

    // 자리교체
    players[curPlayerIndex - 1] = player;
    players[curPlayerIndex] = nextPlayer;

    // 객체 인덱스 순서도 변경
    dict[player] -= 1;
    dict[nextPlayer] += 1;
  });

  return players;
}
