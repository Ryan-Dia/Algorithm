//  링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42576
function solution(participant, completion) {
  let result;
  const par = participant.reduce((pre, cur) => {
    pre[cur] = (pre[cur] || 0) + 1;
    return pre;
  }, {});

  const com = completion.reduce((pre, cur) => {
    pre[cur] = (pre[cur] || 0) + 1;
    return pre;
  }, {});

  for (i = 0; i < participant.length; i++) {
    if (com[participant[i]] !== par[participant[i]]) {
      result = participant[i];
      break;
    }
  }
  return result;
}
