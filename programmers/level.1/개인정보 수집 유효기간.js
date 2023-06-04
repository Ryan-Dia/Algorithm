// 링크 :https://school.programmers.co.kr/learn/courses/30/lessons/150370
// 풀이 :https://html-jc.tistory.com/663

function solution(today, terms, privacies) {
  today = new Date(today.replace(/[.]/g, '-'));

  const updatedTerms = convertArrayToObject(terms);

  return privacies.reduce((acc, cur, index) => {
    const expirationDate = getExpirationDate(cur, updatedTerms);
    if (isExpired(expirationDate, today)) acc.push(index + 1);
    return acc;
  }, []);
}

function convertArrayToObject(terms) {
  return terms.reduce((acc, cur) => {
    const [type, month] = cur.split(' ');
    acc[type] = month;
    return acc;
  }, {});
}

function getExpirationDate(cur, updatedTerms) {
  const [date, type] = cur.split(' ');
  const joinDate = new Date(date.replace(/[.]/g, '-'));
  joinDate.setMonth(joinDate.getMonth() + +updatedTerms[type]);
  return joinDate;
}

function isExpired(expirationDate, today) {
  return expirationDate <= today;
}
