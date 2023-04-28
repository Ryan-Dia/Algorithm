// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/67256

function solution(numbers, hand) {
  console.log(hand[0]);
  var answer = '';
  var LlocalX = 0;
  var LlocalY = 0;
  var RlocalX = 2;
  var RlocalY = 0;
  const nums = {
    1: [0, 3],
    2: [1, 3],
    3: [2, 3],
    4: [0, 2],
    5: [1, 2],
    6: [2, 2],
    7: [0, 1],
    8: [1, 1],
    9: [2, 1],
    '*': [0, 0],
    0: [1, 0],
    '#': [2, 0],
  };

  for (i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    if (num === 1 || num === 4 || num === 7) {
      answer += 'L';
      LlocalX = nums[num][0];
      LlocalY = nums[num][1];
    } else if (num === 3 || num === 6 || num === 9) {
      answer += 'R';
      RlocalX = nums[num][0];
      RlocalY = nums[num][1];
    } else {
      let LD = Math.abs(+nums[num][0] - +LlocalX) + Math.abs(+nums[num][1] - +LlocalY);
      let RD = Math.abs(+nums[num][0] - +RlocalX) + Math.abs(+nums[num][1] - +RlocalY);

      if (LD > RD) {
        answer += 'R';
        RlocalX = nums[num][0];
        RlocalY = nums[num][1];
      } else if (LD < RD) {
        answer += 'L';
        LlocalX = nums[num][0];
        LlocalY = nums[num][1];
      } else {
        if (hand === 'right') {
          answer += 'R';
          RlocalX = nums[num][0];
          RlocalY = nums[num][1];
        } else {
          answer += 'L';
          LlocalX = nums[num][0];
          LlocalY = nums[num][1];
        }
      }
    }
  }
  return answer;
}
