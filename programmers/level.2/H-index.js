function solution(citations) {
  let result = 0;
  for (i = 1; i <= Math.max(...citations); i++)
    if (i <= citations.filter((citation) => citation >= i).length) result = i;
  return result;
}
