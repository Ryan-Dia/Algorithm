// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/72411/solution_groups?language=javascript
// 문제 해설 : https://html-jc.tistory.com/706

function solution(orders, course) {
  // orders 배열의 각 주문에 대해 모든 가능한 조합을 구하고 중복을 체크하여 orderData에 저장
  const orderData = getOrderData(orders, course);

  // course 배열에 있는 길이 중에서 최대 주문 횟수를 가진 조합을 찾음
  const result = course.reduce((acc, courseLength) => {
    let maxCount = 0;
    const candidates = [];

    for (const order in orderData) {
      if (isValidCourseLengthAndOrderCount(order, courseLength, orderData)) {
        if (orderData[order] > maxCount) {
          candidates.length = 0; // 현재 길이의 조합 중 최대 주문 횟수를 가진 조합이 변경되면 후보 배열 초기화
          maxCount = orderData[order];
        }

        if (orderData[order] === maxCount) {
          candidates.push(order);
        }
      }
    }

    acc.push(...candidates);
    return acc;
  }, []);

  return result.sort(); // 결과를 알파벳 순서로 정렬하여 반환
}

function getOrderData(orders, course) {
  return orders.reduce((acc, order) => {
    const orderArray = [...order].sort(); // 주문을 알파벳 순서로 정렬
    const orderLength = orderArray.length; // 주문 문자열의 길이

    // course 배열에 있는 길이의 조합을 구함
    for (const courseLength of course) {
      if (courseLength > orderLength) continue; // 주문 문자열의 길이보다 긴 조합은 무시
      const combinations = getCombinations(orderArray, courseLength);

      for (const combo of combinations) {
        const key = combo.join(''); // 조합을 문자열로 변환하여 키로 사용
        acc[key] = (acc[key] || 0) + 1; // 중복 카운트 증가
      }
    }
    return acc;
  }, {});
}

// 조합을 구하는 함수
function getCombinations(orderArray, courseLength) {
  const result = [];

  function dfs(start, current) {
    if (current.length === courseLength) {
      result.push([...current]);
      return;
    }

    for (let i = start; i < orderArray.length; i++) {
      current.push(orderArray[i]);
      dfs(i + 1, current);
      current.pop();
    }
  }

  dfs(0, []);
  return result;
}

function isValidCourseLengthAndOrderCount(order, courseLength, orderData) {
  return order.length === courseLength && orderData[order] >= 2;
}
