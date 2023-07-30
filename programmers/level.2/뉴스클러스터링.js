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

// 풀이 2 (7/30)

function solution(str1, str2) {
  const CONDITIONAL_NUMBER = 65536;
  const [multisetA, multisetB] = getMultiset(str1, str2);

  // input 모두가 공집합일 때
  if (!multisetA.length && !multisetB.length) {
    return CONDITIONAL_NUMBER;
  }

  const countOfIntersection = calculateIntersection(
    countDuplication(multisetA, multisetB)
  );
  const countOfCombination = calculateCombination(countDuplication(multisetA, multisetB));
  const jaccardSimilarity = countOfIntersection / countOfCombination;

  return Math.floor(jaccardSimilarity * CONDITIONAL_NUMBER);
}

function getMultiset(str1, str2) {
  const multisetA = makeChangeLowercase(pickOnlyString(makeMultiset(str1)));
  const multisetB = makeChangeLowercase(pickOnlyString(makeMultiset(str2)));
  return [multisetA, multisetB];
}

function makeMultiset(str) {
  return [...str].reduce((acc, character, index) => {
    if (index === str.length - 1) {
      return acc;
    }
    const pairOfCharacter = character + str[index + 1];
    acc.push(pairOfCharacter);
    return acc;
  }, []);
}

function pickOnlyString(multisetArr) {
  return multisetArr.filter((pairOfCharacter) => {
    const pairOfCharacterWithOnlyString = pairOfCharacter.match(/[a-zA-Z]/g);
    if (pairOfCharacterWithOnlyString?.length === 2) {
      return pairOfCharacter;
    }
  });
}

function makeChangeLowercase(multisetArr) {
  return multisetArr.map((pairOfCharacter) => pairOfCharacter?.toLowerCase());
}

function countDuplication(multisetA, multisetB) {
  const countOfMultisetA = new Map();
  const countOfMultisetB = new Map();

  multisetA.forEach((pairOfCharacter) => {
    countOfMultisetA.set(
      pairOfCharacter,
      (countOfMultisetA.get(pairOfCharacter) | 0) + 1
    );
  });
  multisetB.forEach((pairOfCharacter) => {
    countOfMultisetB.set(
      pairOfCharacter,
      (countOfMultisetB.get(pairOfCharacter) | 0) + 1
    );
  });

  return { countOfMultisetA, countOfMultisetB, multisetA, multisetB };
}

function calculateIntersection({
  countOfMultisetA,
  countOfMultisetB,
  multisetA,
  multisetB,
}) {
  const intersection = new Set();

  multisetA.forEach((pairOfCharacter) => {
    if (multisetB.includes(pairOfCharacter)) {
      intersection.add(pairOfCharacter);
    }
  });

  return [...intersection].reduce((acc, cur) => {
    if (countOfMultisetA.get(cur) > countOfMultisetB.get(cur)) {
      acc += countOfMultisetB.get(cur);
    } else {
      acc += countOfMultisetA.get(cur);
    }
    return acc;
  }, 0);
}

function calculateCombination({
  countOfMultisetA,
  countOfMultisetB,
  multisetA,
  multisetB,
}) {
  const combination = countOfMultisetA;

  countOfMultisetB.forEach((value, key) => {
    if (combination.has(key)) {
      if (combination.get(key) < value) {
        combination.set(key, value);
      }
      return;
    }
    combination.set(key, value);
  });

  let count = 0;
  combination.forEach((value, key) => (count += value));
  return count;
}

// 풀이 3 (풀이 2 리팩터링)

function solution(str1, str2) {
  const CONDITIONAL_NUMBER = 65536;
  const [multisetA, multisetB] = getMultiset(str1, str2);

  // input 모두가 공집합일 때
  if (!multisetA.length && !multisetB.length) {
    return CONDITIONAL_NUMBER;
  }

  const countOfIntersection = calculateIntersection(
    countDuplication(multisetA, multisetB)
  );
  const countOfunion = calculateUnion(countDuplication(multisetA, multisetB));
  const jaccardSimilarity = countOfIntersection / countOfunion;

  return Math.floor(jaccardSimilarity * CONDITIONAL_NUMBER);
}

function getMultiset(str1, str2) {
  const multisetA = makeChangeLowercase(pickOnlyString(makeMultiset(str1)));
  const multisetB = makeChangeLowercase(pickOnlyString(makeMultiset(str2)));
  return [multisetA, multisetB];
}

function makeMultiset(str) {
  return [...str].reduce((acc, character, index) => {
    if (index === str.length - 1) {
      return acc;
    }
    const pairOfCharacter = character + str[index + 1];
    acc.push(pairOfCharacter);
    return acc;
  }, []);
}

function pickOnlyString(multisetArr) {
  return multisetArr.filter((pairOfCharacter) => {
    const pairOfCharacterWithOnlyString = pairOfCharacter.match(/[a-zA-Z]/g);
    if (pairOfCharacterWithOnlyString?.length === 2) {
      return pairOfCharacter;
    }
  });
}

function makeChangeLowercase(multisetArr) {
  return multisetArr.map((pairOfCharacter) => pairOfCharacter?.toLowerCase());
}

function countDuplication(multisetA, multisetB) {
  const countOfMultisetA = new Map();
  const countOfMultisetB = new Map();

  multisetA.forEach((pairOfCharacter) => {
    countOfMultisetA.set(
      pairOfCharacter,
      (countOfMultisetA.get(pairOfCharacter) | 0) + 1
    );
  });
  multisetB.forEach((pairOfCharacter) => {
    countOfMultisetB.set(
      pairOfCharacter,
      (countOfMultisetB.get(pairOfCharacter) | 0) + 1
    );
  });

  return [countOfMultisetA, countOfMultisetB];
}

function calculateIntersection([countOfMultisetA, countOfMultisetB]) {
  let countOfIntersection = 0;
  countOfMultisetA.forEach((count, pairOfCharacter) => {
    if (countOfMultisetB.has(pairOfCharacter)) {
      countOfIntersection += Math.min(count, countOfMultisetB.get(pairOfCharacter));
    }
  });
  return countOfIntersection;
}

function calculateUnion([countOfMultisetA, countOfMultisetB]) {
  const union = countOfMultisetA;
  countOfMultisetB.forEach((value, key) => {
    union.set(key, Math.max(value, union.get(key) ?? 0));
  });

  let count = 0;
  union.forEach((value, key) => (count += value));
  return count;
}
