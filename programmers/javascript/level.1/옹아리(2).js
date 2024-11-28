// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/133499
// 문제 풀이 : https://html-jc.tistory.com/manage/posts/

// 나의 풀이

function solution(babbling) {
  let result = 0;
  const babblArr = ['aya', 'ye', 'woo', 'ma'];
  const babblingWithoutContinuity = babbling.filter((value) => {
    return babblArr.every((babbl) => !value.includes(babbl.repeat(2)));
  });

  babblingWithoutContinuity.forEach((babbl) => {
    const canBabbl = !babbl.replace(/aya|ye|woo|ma/g, '').length;
    if (canBabbl) {
      result += 1;
    }
  });
  return result;
}

// 다른 사람 풀이 1

function solution(babbling) {
  const regexp1 = /(aya|ye|woo|ma)\1+/;
  const regexp2 = /^(aya|ye|woo|ma)+$/;

  return babbling.reduce(
    (ans, word) => (!regexp1.test(word) && regexp2.test(word) ? ++ans : ans),
    0
  );
}

// 다른 사람 풀이 2

function solution(babbling) {
  const babblables = ['aya', 'ye', 'woo', 'ma'];

  return babbling.reduce((possible, babbl, index) => {
    for (let i = 0; i < babblables.length; i += 1) {
      if (babbl.includes(babblables[i].repeat(2))) return possible;
    }

    for (let i = 0; i < babblables.length; i += 1) {
      babbl = babbl.split(babblables[i]).join(' ').trim();
    }

    if (babbl) return possible;

    return (possible += 1);
  }, 0);
}
