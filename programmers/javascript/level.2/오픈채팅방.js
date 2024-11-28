// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42888

// 풀이 1
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

// 풀이 2

function solution(records) {
  const nicknameData = {};
  const STATE = {
    enter: 'Enter',
    leave: 'Leave',
    change: 'Change',
  };
  const STATE_MESSAGE = {
    Enter: '들어왔습니다.',
    Leave: '나갔습니다.',
  };
  const getStateMessage = (nickname, state) => `${nickname}님이 ${state}`;

  const usersHistory = records.reduce((acc, record) => {
    const [state, userId, nickname] = record.split(' ');
    if (state !== STATE.leave) {
      nicknameData[userId] = nickname;
    }

    if (state !== STATE.change) {
      acc.push([userId, state]);
    }
    return acc;
  }, []);
  return usersHistory.map(([userId, state]) =>
    getStateMessage(nicknameData[userId], STATE_MESSAGE[state])
  );
}

// 문제
/*
  
  아이디 중복 허용
  return 방을 개설한 사람이 보게되는 메시지를 문자열 배열 형태로 return 하도록
  
  단어는 공백으로 구문 
  알파벳 대문자, 소문자, 숫자
  
  유저 아이디와 닉네임은 알파벳 대문자, 소문자를 구별한다
  길이 1 이상 10 이하
  잘못된 입력 x
  
  
*/

// 설계
/*
  record길이가 100,000 이하이기에 가독성을 위해 forEach 사용
  유저 닉네임은 마지막에 for문을 순회하면서 넣자 그때 그때 변경될때마다 전체 변경 x 마지막에 일괄적용
  유저 닉네임은 객체로 관리 (객체는 중복이면 나중에 추가되는 값이 저장된다)
  key = 유저 아이디, value = 유저 닉네임
*/
