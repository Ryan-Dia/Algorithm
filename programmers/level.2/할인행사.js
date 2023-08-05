// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/131127
// 풀이 : https://html-jc.tistory.com/652

// 풀이 1
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

// 풀이 2 (23/8/5)
// 처리 속도 개선 & 코드 가독성 개선

function solution(want, number, discount) {
  const DAYS = 10;
  const discountDays = discount.length;
  let dateCount = 0;

  // 1. wantData 만들기  {원하는 제품 : 원하는 수량}
  const wantData = want.reduce(
    (acc, cur, index) => {
      acc[cur] = number[index];
      return acc;
    },
    { totalQuantity: 10 }
  );

  // 2. for문을 사용해서 discount 순회
  for (let i = 0; i <= discountDays - DAYS; i++) {
    let copyWantData = { ...wantData };

    for (let j = i; j < i + DAYS; j++) {
      const todayItemOnSale = discount[j];
      if (!copyWantData[todayItemOnSale]) {
        break;
      }

      copyWantData[todayItemOnSale] -= 1;
      copyWantData.totalQuantity -= 1;
    }

    if (!copyWantData.totalQuantity) {
      dateCount += 1;
    }
  }
  return dateCount;
}

// 설계
/*
    discount의 길이가 100,000 이기에 full 이중 배열 불가능 
    사용할려면 break 필요
    
    하루에 하나만 구매가능하니 구매하면 해당 제품 number을 차감시켜줘야함 
    즉 want에 있는 제품의 각 개수를 저장하는 data 객체 필요 
    
    그 데이터 객체를 가지고 discount를 반복문으로 순회하면서  하나하나 대조해봐야함
    (여기서 일치하지 않으면 바로 다음으로 넘어가도록 설계)
    
    여기서 최소값이 아니라 총 일수이기 때문에 가능한 일수의 개수를 체크해야함
    
    로직
    1. want와 number의 길이가 짧아서 reduce를 통해서 {원하는 제품 : 원하는 수량} 객체 데이터 생성
    2. for문을 사용해서 discount 순회한다.
    - 하나하나 대조해가며 제품에 대한 number를 차감하며 가입한 날로부터 10일이 지났을 때 number가 전체 0이 되어야함
        (객체 데이터에 number 총합 넣기)
    - 순회하면서 데이터 number의 총합이 0이되면 count ++ 
    - 다시 데이터 초기화 
    - 반복문 이어서 하기
    - 길이는 i = 0  ;  i<=discount.length - 10
*/

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
