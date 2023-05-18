// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42860#
// 풀이 : https://html-jc.tistory.com/650

function solution(name) {
  let move = name.length - 1;

  const getCharMin = () => {
    const first = 65;
    const last = 90 + 1; // 커서를 아래로 이동 시켜야하기때문에  + 1

    return [...name].reduce((acc, cur) => {
      return (acc += Math.min(cur.charCodeAt(0) - first, last - cur.charCodeAt(0)));
    }, 0);
  };

  for (let i = 0; i < name.length; i++) {
    let index = i + 1; // 다음 값들을 확인할때 사용
    let length = name.length;

    //연속된 A 개수 확인
    while (index < length && name.charAt(index) === 'A') {
      index++;
    }
    move = Math.min(
      move, // 똑바로 갈 때
      i * 2 + length - index, // 돌아갈 때
      (length - index) * 2 + i
    ); // 뒤쪽부터 할 때
  }

  return getCharMin() + move;
}
