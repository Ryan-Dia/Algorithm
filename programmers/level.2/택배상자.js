// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/131704

function solution(order) {
  let box = 0;
  const orderLength = order.length;
  const subConveyorBelt = [];
  let index = 1;

  while (index <= orderLength) {
    subConveyorBelt.push(index);

    // stack의 가장 최근에 넣은 상자와 order의 첫번째 상자가 같으면
    if (subConveyorBelt.at(-1) === order[box]) {
      while (
        subConveyorBelt.length &&
        orderLength &&
        subConveyorBelt.at(-1) === order[box]
      ) {
        subConveyorBelt.pop();
        box += 1;
      }
    }
    index += 1;
  }

  return box;
}
