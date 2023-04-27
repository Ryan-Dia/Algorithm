// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
  var answer = 0;
  var box = [];
  let boards = board;
  for (i = 0; i < moves.length; i++) {
    let moving = moves[i];
    for (k = 0; k < moves.length; k++) {
      let local = boards[k] || [];
      if (local[moving - 1]) {
        box.push(local[moving - 1]);
        local.splice(eval(`${moving}-1`), 1, 0);
        break;
      }
    }
  }
  let toto = box.reduce((unique, item) => {
    return unique[unique.length - 1] === item ? unique.slice(0, -1) : [...unique, item];
  }, []);
  answer = box.length - toto.length;
  return answer;
}
