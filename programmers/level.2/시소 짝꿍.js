function solution(weights) {
  weights.sort((a, b) => a - b);
  let answer = 0;
  let count = 0;

  for (let i = 0; i < weights.length; i++) {
    // 이전과 중복된 무게이면 이전에 했던 계산에서 -1 만하면 똑같음
    if (haveDuplicateBefore(weights, i)) {
      count -= 1;
      answer += count;
      continue;
    }

    count = 0;
    let maxLength = findMaxLength(weights, weights[i], i);
    for (let j = i + 1; j <= maxLength; j++) {
      const min = weights[i];
      const max = weights[j];

      if (
        min === max ||
        min * 2 === max ||
        (min * 3) / 2 === max ||
        (min * 4) / 3 === max
      ) {
        count += 1;
      }
    }
    answer += count;
  }
  return answer;
}

function haveDuplicateBefore(weights, i) {
  return i > 0 && weights[i] === weights[i - 1];
}

// 이진 탐색
function findMaxLength(weights, weight, index) {
  let left = index;
  let right = weights.length - 1;
  const maxWeight = weight * 2;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (weights[mid] > maxWeight) {
      return mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
