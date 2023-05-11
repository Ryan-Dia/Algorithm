// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit) {
  people.sort((a, b) => b - a);
  let Maxboat = [];
  let box = [];
  people.map((x) => (x > limit / 2 ? Maxboat.push([x]) : box.push(x)));
  for (i = 0, k = Maxboat.length - 1; i < box.length; i++) {
    if (Maxboat[k] && +Maxboat[k][0] + +box[i] <= limit && Maxboat[k].length < 2) {
      Maxboat[k].push(box[i]);
      box.splice(i, 1);
      k--;
    }
  }
  return Maxboat.length + Math.ceil(box.length / 2);
}
