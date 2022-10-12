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
