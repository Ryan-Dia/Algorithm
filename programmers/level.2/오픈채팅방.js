// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42888

function solution(record) {
  const sort = record.reduce((acc, cur, i, arr) => {
    cur.split(' ')[2] ? (acc[cur.split(' ')[1]] = cur.split(' ')[2]) : null;
    return acc;
  }, {});
  const lastNickName = (state, id) => {
    switch (state) {
      case 'Enter':
        return `${sort[id]}님이 들어왔습니다.`;
        break;
      case 'Leave':
        return `${sort[id]}님이 나갔습니다.`;
        break;
      case 'Change':
        return false;
        break;
    }
  };
  return record
    .map((x) => lastNickName(x.split(' ')[0], x.split(' ')[1]))
    .filter((x) => x);
}
