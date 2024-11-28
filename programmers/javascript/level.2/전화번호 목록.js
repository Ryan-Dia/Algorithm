// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42577#

function solution(phone_book) {
  phone_book.sort();
  for (let i = 0; i < phone_book.length - 1; i++) {
    const current = phone_book[i];
    const next = phone_book[i + 1];

    const isMatch = next.match(`^${current}`);
    if (isMatch) {
      return false;
    }
  }
  return true;
}
