// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/1844

function solution(maps) {
  let answer = 1;
  let visited = maps;
  let queue = [];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const n = maps.length;
  const m = maps[0].length;

  queue.push([0, 0]);
  visited[0][0] = 0;

  while (queue.length > 0) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let [x, y] = queue.shift();

      for (let j = 0; j < 4; j++) {
        let nx = x + dx[j];
        let ny = y + dy[j];

        if (nx <= 0 || ny <= 0) continue;
        if (nx >= n || ny >= m) continue;
        if (maps[nx][ny] === 1 && visited[nx][ny] === 0) {
          if (nx + 1 === n && ny + 1 === m) {
            return ++answer;
          }
          queue.push([nx, ny]);
          visited[nx][ny] = 1;
        }
      }
    }
    answer++;
  }

  return -1;
}
