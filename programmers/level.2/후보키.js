function solution(relation) {
  let idxArr = Array.from(Array(relation[0].length), (_, i) => i);
  let combinations = [];
  for (let i = 0; i < idxArr.length; i++) {
    combinations.push(...getCombination(idxArr, i + 1));
  }

  const uniqueness = checkUniqueness(relation, combinations);
  const minimality = checkMinimality(uniqueness);

  return minimality.length;
}

function getCombination(idxArr, num) {
  const results = [];
  if (num === 1) {
    return idxArr.map((_) => [_]);
  }

  idxArr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombination(rest, num - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });

  return results;
}

function checkUniqueness(relation, combinations) {
  const results = [];
  combinations.forEach((combination) => {
    let set = new Set();
    relation.forEach((column) => {
      set.add(combination.map((index) => column[index]).join(','));
    });

    if (set.size === relation.length) {
      results.push(combination);
    }
  });
  return results;
}

function checkMinimality(combinations) {
  const results = [];

  while (combinations.length > 0) {
    const firstCombination = combinations[0];
    results.push(firstCombination);
    combinations = combinations.reduce((acc, combination) => {
      const isMinimality = firstCombination.every((e) => !combination.includes(e));

      if (isMinimality) {
        acc.push(combination);
      }
      return acc;
    }, []);
  }

  return results;
}
