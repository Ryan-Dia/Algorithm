// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/176963?language=javascript

function solution(name, yearning, photo) {
  // 생각
  // name + yearning  객체로 만들어서 계속 활용

  const longingBox = {};

  // 1. 객체로 만들기
  // 두개 동시에 해야하기에 forEach나 reduce보단 for문으로 한 번에 두개를 넣자
  // 어차피 name과 yearing의 길이는 같으니까 물론 reduce로도 가능하다
  for (let i = 0; i < name.length; i++) {
    longingBox[name[i]] = yearning[i];
  }

  // reduce를 사용했을 때
  /*
    const longingBox = name.reduce((acc,cur,index) => {
        acc[cur] =  yearning[index]
        return acc
    },{})
        
    */

  // 2. longingBox를 활용해서 photo의 이중배열을 계산 및 처리후 result 배열 만들기

  // 내부 reduce는 배열안 배열의 각 그리움 점수의 합을 계산하여 return해준다.
  // 외부 reduce는 단순히 그 그리움의 점수를 배열로 만들어 return해줄뿐이다.

  return photo.reduce((photoAcc, photoCur) => {
    const longingScore = photoCur.reduce((acc, cur) => {
      // 그리움 상자에 해당 인물이 있을 때
      if (longingBox[cur]) acc += longingBox[cur];
      return acc;
    }, 0);
    photoAcc.push(longingScore);
    return photoAcc;
  }, []);
}

// 다른사람 풀이

// 이런식으로 풀면 굳이 객체를 만들필요가 없긴 하다 .

function solution(name, yearning, photo) {
  return photo.map((v) => v.reduce((a, c) => (a += yearning[name.indexOf(c)] ?? 0), 0));
}
