function solution(str1, str2) {
  const DEFAULT_NUMBER = 65536;

  const pureWordFromStr1 = lowerCase(onlyValidWords(divideString(str1)));
  const pureWordFromStr2 = lowerCase(onlyValidWords(divideString(str2)));

  const collections1 = countWordWithDuplication(pureWordFromStr1);
  const collections2 = countWordWithDuplication(pureWordFromStr2);
  const intersection = calculateIntersection(collections1, collections2);
  const union = calculateUnion(collections1, collections2, intersection);

  if (intersection.length === 0 && union !== 0) return 0;
  const result = Math.trunc((intersection.length / union) * DEFAULT_NUMBER);
  return result ? result : DEFAULT_NUMBER;
}

function calculateUnion(collections1, collections2, intersection) {
  const union = { ...collections1 };

  for (let word in collections2) {
    union[word] = (union[word] || 0) + collections2[word];
  }

  for (let word of intersection) {
    union[word] -= 1;
  }
  return Object.values(union).reduce((acc, count) => acc + count, 0);
}

function calculateIntersection(collections1, collections2, intersection = []) {
  const RegExp = /\B(?=(\w{2})+(?!\w))/g;
  for (let word in collections1) {
    const min = Math.min(collections1[word], collections2[word]);
    if (min) intersection.push(...word.repeat(min).replace(RegExp, ',').split(','));
  }
  return intersection;
}

function countWordWithDuplication(word) {
  return word.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
}

function divideString(str) {
  return [...str].reduce((acc, cur, i, arr) => {
    if (arr[i + 1]) acc.push(cur + arr[i + 1]);
    return acc;
  }, []);
}

function onlyValidWords(string) {
  return string.filter((word) => /[a-z]{2}/gi.test(word));
}

function lowerCase(words) {
  return words.map((word) => word.toLowerCase());
}

console.log(solution('FRANCE', 'french') === 16384);
console.log(solution('handshake', 'shake hands') === 65536);
console.log(solution('aa1+aa2', 'AAAA12') === 43690);
console.log(solution('E=M*C^2', 'e=m*c^2') === 65536);
