// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/49994?language=javascript#
// 문제 풀이 : https://html-jc.tistory.com/686

function solution(dirs) {
  let beforeCoordinates = '00';
  const visited = new Set();
  const splitDirs = [...dirs];
  const coordinates = {
    x: 0,
    y: 0,
  };

  splitDirs.forEach((dir) => {
    if (cannotMove(dir, coordinates)) return;
    const nowCoordinates = `${coordinates.x}${coordinates.y}`;

    // 왕복 경로 모두 저장 (시작점 S 끝점 E)
    visited.add(`S${beforeCoordinates}E${nowCoordinates}`);
    visited.add(`S${nowCoordinates}E${beforeCoordinates}`);
    beforeCoordinates = nowCoordinates;
  });

  // 왕복 경로의 개수이기 때문에 나누기 2
  return visited.size / 2;
}

function cannotMove(dir, coordinates) {
  const move = {
    U: 1,
    R: 1,
    D: -1,
    L: -1,
  };
  if (dir === 'R' || dir === 'L') {
    coordinates.x += move[dir];
  }
  if (dir === 'D' || dir === 'U') {
    coordinates.y += move[dir];
  }

  // 경계선 밖으로 움직일 수 없다.
  if (coordinates.y === 6) {
    coordinates.y -= 1;
    return true;
  }
  if (coordinates.y === -6) {
    coordinates.y += 1;
    return true;
  }
  if (coordinates.x === 6) {
    coordinates.x -= 1;
    return true;
  }
  if (coordinates.x === -6) {
    coordinates.x += 1;
    return true;
  }
  return false;
}

// 문제
/*
    주의 : 경계선 이상 가라고 하는 명령은 무시한다. 
    처음 걸어본 길만 return 한다. 
    
    return number 
    return 처음걸어본 길 전체
*/

// 설계
/*
    어떻게 코드를 만들까? 
    1) 지나갔던 경로 기억해야함 
    2) 경계선을 넘는 명령은 무시
*/
