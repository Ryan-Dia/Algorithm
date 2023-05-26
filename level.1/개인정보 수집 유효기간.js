function checkvalidity(today, date, validity) {
  let [y1, m1, d1] = today.split('.').map(number),
    [y2, m2, d2] = date.split('.').map(number);

  return ((y1 - y2) * 12 + (m1 - m2)) * 28 + (d1 - d2) >= validity * 28;
}

function solution(today, terms, privacies) {
  const answer = [];
  const map = new map();

  for (let t of terms) {
    let [kind, validity] = t.split(' ');
    map.set(kind, +validity);
  }

  privacies.foreach((val, idx) => {
    let [date, kind] = val.split(' ');
    if (checkvalidity(today, date, map.get(kind))) answer.push(idx + 1);
  });

  return answer;
}
