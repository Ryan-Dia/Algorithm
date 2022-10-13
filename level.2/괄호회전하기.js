function solution(s) {
  let result = 0;
  for (i = 0; i < s.length; i++) {
    let sum = 0;
    for (item of s) {
      if (s[0] === "}" || s[0] === ")" || s[0] === "]") {
        sum = -1;
      }
      if (sum < 0) break;
      if (item === "{" || item === "(" || item === "[") sum++;
      else sum--;
    }
    let save = s[0];
    s = s.slice(1);
    s += save;
    if (sum === 0) result++;
  }
  return result;
}

///

function solution(s) {
  let result = 0;
  let distinction;
  for (i = 0; i < s.length; i++) {
    let sum;
    let big;
    let middle;
    let small;
    for (item of s) {
      if (s.at(-1) === "{" || s.at(-1) === "[" || s.at(-1) === "(") sum = -1;
      if (s[0] === "}" || s[0] === ")" || s[0] === "]") {
        sum = -1;
      }
      if (sum < 0) break;
      if (item === "{") big === undefined ? (big = 1) : big++;
      else if (item === "[") middle === undefined ? (middle = 1) : middle++;
      else if (item === "(") small === undefined ? (small = 1) : small++;
      else if (item === "}") big === undefined ? (sum = -1) : big--;
      else if (item === "]") middle === undefined ? (sum = -1) : middle--;
      else if (item === ")") small === undefined ? (sum = -1) : small--;
    }
    if (big === 0 && middle === 0 && small === 0) distinction = true;
    let save = s[0];
    s = s.slice(1);
    s += save;
    if (distinction) {
      result++;
      distinction = false;
    }
  }
  return result;
}

///올바른 풀이법
function solution(s) {
  const big = /{}/g;
  const middle = /\[]/g;
  const small = /\(\)/g;
  let array = s.slice();
  let save;
  let result = 0;
  for (i = 0; i < s.length; i++) {
    while (array.length > 0) {
      if (array.includes("{}")) array = array.replace(big, "");
      if (array.includes("[]")) array = array.replace(middle, "");
      if (array.includes("()")) array = array.replace(small, "");
      if (
        !array.includes("()") &&
        !array.includes("[]") &&
        !array.includes("{}")
      )
        break;
    }
    if (array.length === 0) result++;
    save = s[0];
    s = s.slice(1);
    s += save;
    array = s;
  }
  return result;
}
