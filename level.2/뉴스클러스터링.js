function solution(str1, str2) {
  const constant = 65536;

  const pureWordFromStr1 = lowerCase(onlyWord(divideString(str1)));
  const pureWordFromStr2 = lowerCase(onlyWord(divideString(str2)));

  const Collections1 = countWordWithDuplication(pureWordFromStr1);
  const Collections2 = countWordWithDuplication(pureWordFromStr2);
  const intersection = calculateIntersection(Collections1, Collections2);
  const union = calculateUnion(Collections1, Collections2, intersection);

  if (intersection.length === 0 && union !== 0) return 0;
  const result = Math.trunc((intersection.length / union) * constant);
  return result ? result : constant;
}

function calculateUnion(Collections1, Collections2, intersection, union = 0) {
  for (let word in Collections2) {
    Collections1[word] = (Collections1[word] || 0) + Collections2[word];
  }

  for (let word of intersection) {
    Collections1[word] -= 1;
  }

  for (let word in Collections1) {
    union += Collections1[word];
  }

  return union;
}

function calculateIntersection(Collections1, Collections2, intersection = []) {
  for (let word in Collections1) {
    const min = Math.min(Collections1[word], Collections2[word]);
    if (min)
      intersection.push(
        ...word
          .repeat(min)
          .replace(/\B(?=(\w{2})+(?!\w))/g, ',')
          .split(',')
      );
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

function onlyWord(string) {
  return string.filter((word) => /[a-z]{2}/gi.test(word));
}

function lowerCase(words) {
  return words.map((word) => word.toLowerCase());
}

console.log(solution('FRANCE', 'french') === 16384);
console.log(solution('handshake', 'shake hands') === 65536);
console.log(solution('aa1+aa2', 'AAAA12') === 43690);
console.log(solution('E=M*C^2', 'e=m*c^2') === 65536);
