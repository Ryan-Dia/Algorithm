// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/155651

function solution(book_time) {
  // 입실시간 빠른 순으로 정렬

  const newBookTime = book_time.map((time) => {
    return time.map((value) => {
      const bookTime = new Date();
      const [hours, minutes] = value.split(':');
      bookTime.setHours(hours);
      bookTime.setMinutes(minutes);
      return bookTime.getHours() * 60 + bookTime.getMinutes();
    });
  });
  newBookTime.sort(([inTimeA, _], [inTimeB, __]) => inTimeA - inTimeB);
  let result = 0;

  while (newBookTime.length) {
    const [inTime, outTime] = newBookTime.shift();
    let nowOutTime = outTime;
    for (let index = 0; index < newBookTime.length; index++) {
      const value = newBookTime[index];

      if (nowOutTime + 10 <= value[0]) {
        nowOutTime = value[1];
        newBookTime.splice(index, 1);
        index--; // 삭제된 요소 이후의 인덱스들을 조정해야 함
      }
    }
    result += 1;
  }
  return result;
}

// 문제
/*
    한번 사용한 객실은 퇴실 시간을 기준으로 10분간 청소를 하고 다음 손님
    
    예약 시간이 문자열 형태로 담긴 2차원 배열 book_time 
    
    return 코니에게 필요한 "최소" 객실의 수
    return 숫자
    
    [대실 시작 시간, 대실 종료 시각]
    예약시간 자정 넘어가는 경우 x
*/

// 설계
/*
    1. 시작 시간이 제일 빠른 것부터 넣고 그 다음 뒤쪽 시간에 넣을 수 있으면 넣기  
    2. 다음 방으로 넘어가서 다시 1번 반복

    1. 가장 시간이 긴것을 찾고  방 1에 넣기 양 옆에 넣을 수 있으면 넣기 
    2. 방 2에 그다음 긴것 넣고 양 옆에 넣을 수 있으면 넣기 
    3. 방 n에 그 다음 긴것 넣고 양 옆에 넣을 수 있으면 넣기 
*/
