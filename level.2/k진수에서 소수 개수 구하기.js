function solution(n, k) {
  const numbers = n;
  const antilogarithm = k;
  const NumbersChangedAntilogarithm = numbers.toString(antilogarithm);
  const result = selectPrimeNotIncludeZero(NumbersChangedAntilogarithm);

  return result.length;
}

function selectPrimeNotIncludeZero(numbers, numbersWithoutZero = '') {
  return [...numbers].reduce((acc, cur, index, arr) => {
    if (cur !== '0') numbersWithoutZero += cur;
    if (cur === '0' || index === arr.length - 1) {
      if (isPrime(Number(numbersWithoutZero))) acc.push(numbersWithoutZero);
      numbersWithoutZero = '';
    }
    return acc;
  }, []);
}

function isPrime(num) {
  if (!num || num === 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (!(num % i)) return false;
  }
  return true;
}

// 필요개념
// 진수 변환하는 법
// 소수 계산하는 법
