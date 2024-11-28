// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/150368
// 풀이 : https://html-jc.tistory.com/675

function solution(users, emoticons) {
  // 40~10% 할인율중에서 users의 최소 비율보다 작은 할인율 제거
  const discountRates = getDiscountRates(users);

  // emoticons이 할인되어 책정될 수 있는 모든 가격 리스트
  const discountCombinations = generateDiscountCombinations(discountRates, emoticons);
  // [[emoticonPlus, emoticonsSales]...]
  const profits = getProfits(discountCombinations, users);
  console.log(profits);

  // 이모티콘 플러스 서비스 가입자 수를 내림차순으로 정렬하고 서비스 가입자 수가 같으면 판매액을 내림차순으로 정렬
  profits.sort(([emoticonPlusA, emoticonsSalesA], [emoticonPlusB, emoticonsSalesB]) => {
    if (emoticonPlusB === emoticonPlusA) return emoticonsSalesB - emoticonsSalesA;
    return emoticonPlusB - emoticonPlusA;
  });

  return profits[0];
}

function getDiscountRates(users) {
  const minRate = Math.min(...users.map(([discountRate, _]) => discountRate));
  return [40, 30, 20, 10].filter((rate) => rate >= minRate);
}

function generateDiscountCombinations(discount, emoticons) {
  const combinations = [];
  // 부동 소수 때문에  0.6을 바로 사용하지 않고 x*6/10을 사용
  const count = {
    40: 6,
    30: 7,
    20: 8,
    10: 9,
  };

  const backtrack = (discountIdx = 0, currentCombo = []) => {
    if (currentCombo.length === emoticons.length) {
      combinations.push([...currentCombo]);
      return;
    }

    for (let i = discountIdx; i < discount.length; i++) {
      currentCombo.push([
        Math.floor((emoticons[currentCombo.length] * count[discount[i]]) / 10),
        discount[i],
      ]);
      backtrack(discountIdx, currentCombo);
      currentCombo.pop();
    }
  };
  backtrack();
  return combinations;
}

function getProfits(discountCombinations, users) {
  const profits = [];

  discountCombinations.forEach((discountCombination, index) => {
    const profit = {
      emoticonPlus: 0,
      sales: 0,
    };

    users.forEach(([discountRate, limitPrice]) => {
      const purchasedUser = discountCombination.filter(
        ([_, desiredRate]) => desiredRate >= discountRate
      );
      const totalPurchases = purchasedUser.reduce((acc, [pri, _]) => (acc += pri), 0);
      const isBuyEmoticonPlus = totalPurchases >= limitPrice;
      if (isBuyEmoticonPlus) {
        profit.emoticonPlus += 1;
        return;
      }
      profit.sales += totalPurchases;
    });
    profits.push(profit);
  });
  return profits.map(({ emoticonPlus, sales }) => [emoticonPlus, sales]);
}
