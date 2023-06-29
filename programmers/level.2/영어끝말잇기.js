// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12981#
// 문제 해설 : https://html-jc.tistory.com/434

// 풀이 1

function solution(n, words) {
  const usedWords = new Set([words[0]]);
  let beforeLastLetter;

  // 총 3번의 return 존재
  /*
      1. 끝말잇기가 성립되지 않을 때
      2. 이미 사용했던 단어를 또 사용했을 때
      3. 탈락자가 발생하지 않았을 때
  */

  for (let i = 1; i < words.length; i++) {
    beforeLastLetter = words[i - 1].at(-1);
    if (isInvalidWord(beforeLastLetter, words[i], usedWords)) {
      return [(i + 1) % n || n, Math.ceil((i + 1) / n)];
    }
    usedWords.add(words[i]);
  }
  return [0, 0];
}

function isInvalidWord(beforeLastLetter, word, usedWords) {
  return (
    isWordChainInvalid(beforeLastLetter, word) || isWordAlreadyExists(usedWords, word)
  );
}

function isWordChainInvalid(beforeLastLetter, word) {
  return beforeLastLetter !== word[0];
}

function isWordAlreadyExists(usedWords, word) {
  return usedWords.has(word);
}

// 풀이 2

function solution(n, words) {
  let count = 0;
  words.reduce((acc, cur, i, arr) => {
    if (i !== 0) {
      if (cur[0] !== acc[i - 1][acc[i - 1].length - 1]) {
        count = i + 1;
        return arr.splice(1);
      }
      if (acc.find((x) => x === cur)) {
        count = i + 1;
        return arr.splice(1);
      }
    }
    acc[i] = cur;
    return acc;
  }, []);
  let order;
  if (count <= n) order = count;
  else {
    if (count % n === 0) order = n;
    else order = count % n;
  }
  return count ? [order, Math.ceil(count / n)] : [0, 0];
}
