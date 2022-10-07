function solution(arr1, arr2) {
  let box = [];
  let result = [];
  let sum = 0;
  let length =
    arr1[0].length < arr2[0].length ? arr1[0].length : arr2[0].length;
  for (i = 0; i < arr1.length; i++) {
    for (k = 0; k < arr2.length; k++) {
      for (j = 0; j < length; j++) {
        sum += arr1[i][j] * arr2[j][k];
      }
      result.push(sum);
      sum = 0;
    }
    box.push(result);
    result = [];
  }

  return box;
}
