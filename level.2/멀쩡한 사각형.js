// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/62048

function solution(w, h) {
  const gcd = (a, b) => {
    const remainder = a % b;
    if (!remainder) return b;
    return gcd(b, remainder);
  };
  return w * h - (w + h - gcd(w, h));
}
