// 최근 풀이  (제일 빠름 0.06ms)

const dict = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

function solution(s) {
  for (let numericSpelling in dict) {
    let regex = new RegExp(numericSpelling, 'g');
    s = s.replace(regex, dict[numericSpelling]);
  }
  return Number(s);
}

// 다르게 풀어 보기 (시간 더 걸림) 0.07 ms  ~ 0.15ms

const dict = new Map([
  ['zero', 0],
  ['one', 1],
  ['two', 2],
  ['three', 3],
  ['four', 4],
  ['five', 5],
  ['six', 6],
  ['seven', 7],
  ['eight', 8],
  ['nine', 9],
]);

function solution(s) {
  dict.forEach((value, key) => {
    let regex = new RegExp(key, 'g');
    s = s.replace(regex, value);
  });
  return +s;
}

// 아주 옛날 풀이

function solution(s) {
  const data = [
    { zero: '0' },
    { one: 1 },
    { two: 2 },
    { three: 3 },
    { four: 4 },
    { five: 5 },
    { six: 6 },
    { seven: 7 },
    { eight: 8 },
    { nine: 9 },
  ];
  const preCheck = (number) => {
    const result = data.find((row) => row[number]);
    return Object.values(result).join();
  };
  const numbers = /zero|one|two|three|four|five|six|seven|eight|nine/g;
  const answer = s.replace(numbers, preCheck);

  return +answer;
}
