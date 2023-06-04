// 링크 : https://www.acmicpc.net/problem/1931
// 풀이 : https://html-jc.tistory.com/669

const fs = require('fs');
// 백준 제출
//  const readFileSyncAddress = "/dev/stdin"
// VSCode 테스트
const readFileSyncAddress = 'example.txt';

let input = fs.readFileSync(readFileSyncAddress).toString().split('\n');

const [length, ...rest] = input;

rest.sort((a, b) => {
  if (a.split(' ')[1] === b.split(' ')[1]) {
    return a.split(' ')[0] - b.split(' ')[0];
  }
  return a.split(' ')[1] - b.split(' ')[1];
});

let meetingCount = 0;
let previousMaxTime = 0;

for (let i = 0; i < length; i++) {
  let [minTime, maxTime] = rest[i].split(' ');
  if (previousMaxTime <= minTime) {
    meetingCount += 1;
    previousMaxTime = +maxTime;
  }
}

console.log(meetingCount);
