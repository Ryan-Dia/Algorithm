// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/131128

function solution(X, Y) {
  const duplication = {};
  const dictX = generateDict([...X]);
  const dictY = generateDict([...Y]);
  const min = X.length > Y.length ? dictY : dictX;
  const another = X.length > Y.length ? dictX : dictY;

  for (let number in min) {
    if (min[number] && another[number]) {
      duplication[number] = Math.floor((min[number] + another[number]) / 2);
    }
  }
  let st = '';
  for (let number in duplication) {
    st += number.repeat(duplication[number]);
  }
  if (st.match(/0/g)) {
    if (st.length === st.match(/0/g).length) {
      return '0';
    }
  }
  const result = [...st].sort((a, b) => b - a).join('');
  return result ? result : '-1';
}

function generateDict(arr) {
  return arr.reduce((acc, cur, index) => {
    acc[cur] = (acc[cur] | 0) + 1;
    return acc;
  }, {});
}

// 문제
/*
    짝궁이 존재하지 않으면 -1
    짝궁이 0으로만 구성되어 있다면, 짝궁은 0
    
    ex)
    x = 3403, y=13203        x,y 공통 3, 0, 3  가장 큰 정수 330
    x = 5525, y=1255         x,y의 짝꿍은 x,y에서 공통으로 나타나는 2,5,5로 만들 수 있는 가장 큰 정수인 552
    
    return x,y의 짝꿍
    return string
*/

// 제한
// x,y 는 0으로 시작하지 않는다.
// x,y의 짝궁은 상당히 큰 정수일 수 있으므로, 문자열로 반환   => 첨부터 문자열로 다루자
