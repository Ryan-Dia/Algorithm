function solution(msg) {
  const result = match(msg);
  return result;
}

function match(string, result = [], alphabetIndex = GenerateAlphabetIndex()) {
  console.log(alphabetIndex);
  if (alphabetIndex.has(string)) {
    result.push(alphabetIndex.get(string));
    return result;
  }
  let index = 0;
  let hasIndex;
  do {
    index += 1;
    hasIndex = alphabetIndex.has(string.slice(0, index));
  } while (hasIndex);
  alphabetIndex.set(string.slice(0, index), alphabetIndex.size + 1);
  result.push(alphabetIndex.get(string.slice(0, index - 1)));
  return match(string.slice(index - 1), result, alphabetIndex);
}

function GenerateAlphabetIndex() {
  const alphabetArray = GenerateAlphabet();
  const alphabetIndex = new Map();
  alphabetArray.forEach((alphabet, index) => {
    alphabetIndex.set(alphabet, index + 1);
  });
  return alphabetIndex;
}

function GenerateAlphabet() {
  let startIndex = 65;
  return Array.from({ length: 26 }, () => {
    let alphabet = String.fromCharCode(startIndex);
    startIndex += 1;
    return alphabet;
  });
}

console.log(solution('KAKAO'));
console.log(solution('TOBEORNOTTOBEORTOBEORNOT'));
console.log(solution('ABABABABABABABAB'));

// 잊었던 개념 객체를 먼저 선언하고 할당하기
// 객체 -> 배열  그 반대도  도와주는 메서드 확실히 외우기
