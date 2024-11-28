// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12905

function solution(board) {
  let answer = 0;

  if (board.length == 1 || board[0].length == 1) {
    return 1;
  }

  for (let i = 1; i < board.length; i++) {
    for (let j = 1; j < board[i].length; j++) {
      if (board[i][j] != 0) {
        let minValue = Math.min(board[i - 1][j - 1], board[i][j - 1], board[i - 1][j]);

        board[i][j] = minValue + 1;

        answer = Math.max(answer, board[i][j]);
      }
    }
  }

  return answer ** 2;
}
