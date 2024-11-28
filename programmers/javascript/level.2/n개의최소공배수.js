//1)
function solution(arr) {
  const gcd = (a, b) => {
    const remainder = a % b;
    if (remainder === 0) return b;
    return gcd(b, remainder);
  };
  return arr.reduce((a, b) => (a * b) / gcd(a, b));
}

//2)
function solution(arr) {
  const gcd = (a, b) => {
    const remainder = a % b;
    if (remainder === 0) return b;
    return gcd(b, remainder);
  };
  while (arr.length >= 2) {
    let a = arr.pop();
    let b = arr.pop();
    arr.push((a * b) / gcd(a, b));
  }
  return Number(arr);
}
