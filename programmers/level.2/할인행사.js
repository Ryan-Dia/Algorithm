// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/131127
// 풀이 : https://html-jc.tistory.com/652

function solution(want, number, discount) {
  const cut = 10;
  let result = 0;

  // 자주 사용하기에 want 배열과 number배열을 하나의 객체로 만들어 준다.
  // wnat의 길이가 10이하이기 때문에 가독성을 위해 for문보다 reduce를 사용했다.
  const wantBox = want.reduce((acc, cur, index) => {
    acc[cur] = number[index];
    return acc;
  }, {});

  for (let j = 0; j <= discount.length - cut; j++) {
    // 할인 상품 10일 단위로 끊기
    const seriesOfDiscountedGoods = discount.slice(j, j + cut);
    let count = 0;

    // 10일 동안의 할인 상품과 수량이 들어있는 객체 만들기
    const discountBox = seriesOfDiscountedGoods.reduce((acc, cur, index) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {});

    // 원하는 제품과 수량이  10일 동안의 할인 상품,수량과 일치하는지 확인
    let flag = true;
    for (const goods in wantBox) {
      // 원하는 상품이 없거나 수량이 일치하지 않으면 early return
      if (!discountBox[goods] || wantBox[goods] !== discountBox[goods]) {
        flag = false;
        break;
      }
    }
    // 원하는 제품과 수량이 10일간 마트 할인과 일치하다면 result += 1
    if (flag) result += 1;
  }
  return result;
}

// 다른사람 풀이

function solution(want, number, discount) {
  let count = 0;
  for (let i = 0; i < discount.length - 9; i++) {
    const slice = discount.slice(i, i + 10);

    let flag = true;
    for (let j = 0; j < want.length; j++) {
      if (slice.filter((item) => item === want[j]).length !== number[j]) {
        flag = false;
        break;
      }
    }
    if (flag) count += 1;
  }
  return count;
}
