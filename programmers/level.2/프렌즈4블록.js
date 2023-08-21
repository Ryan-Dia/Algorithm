// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/17679

function solution(m, n, board) {
  let result = 0;

  while (true) {
    const matchingBlocks = new Set();

    // 2x2 블록의 일치 여부 확인
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        const current = board[i][j];
        const next = board[i][j + 1];
        const belowCurrent = board[i + 1][j];
        const belowNext = board[i + 1][j + 1];

        if (current === '0') {
          continue;
        }

        const isAllSame =
          current === next && current === belowCurrent && belowCurrent === belowNext;

        if (isAllSame) {
          matchingBlocks.add(`${i},${j}`);
          matchingBlocks.add(`${i},${j + 1}`);
          matchingBlocks.add(`${i + 1},${j}`);
          matchingBlocks.add(`${i + 1},${j + 1}`);
        }
      }
    }

    // 2x2 블록 일치가 하나도 없을 때
    if (matchingBlocks.size === 0) {
      break;
    }

    // 일치하는 블록 처리 및 보드 수정
    const newBoard = board.map((row) => row.split('')); // 문자열을 배열로 변경
    matchingBlocks.forEach((pos) => {
      const [x, y] = pos.split(',').map(Number);
      newBoard[x][y] = '0'; // 0 은 해당 블록 제거되었다는 뜻
    });

    // 보드 재구성
    const stackedColumns = Array.from({ length: n }, () => []);
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (newBoard[i][j] !== '0') {
          stackedColumns[j].push(newBoard[i][j]);
        }
      }
    }

    // 블록을 보드에 다시 적용
    for (let j = 0; j < n; j++) {
      for (let i = m - 1; i >= 0; i--) {
        if (stackedColumns[j].length) {
          newBoard[i][j] = stackedColumns[j].pop();
        } else {
          newBoard[i][j] = '0';
        }
      }
    }

    board = newBoard.map((row) => row.join('')); // 배열을 문자열로 변경
    result += matchingBlocks.size;
  }

  return result;
}
