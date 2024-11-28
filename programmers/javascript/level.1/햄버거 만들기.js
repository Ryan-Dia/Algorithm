// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/133502

function solution(ingredient) {
  let result = 0;
  let stack = [];

  ingredient.forEach((ingredientItem) => {
    stack.push(ingredientItem);
    if (canMakeHamburger(stack)) {
      removeUsedIngredientItem(stack);
      result += 1;
    }
  });
  return result;
}

function canMakeHamburger(stack) {
  const isFirstBread = stack.at(-4) === 1;
  const isVegetable = stack.at(-3) === 2;
  const isMeat = stack.at(-2) === 3;
  const isLastBread = stack.at(-1) === 1;
  return isFirstBread && isVegetable && isMeat && isLastBread;
}

function removeUsedIngredientItem(stack) {
  stack.pop();
  stack.pop();
  stack.pop();
  stack.pop();
}

// 문제
/* 아래서부터 빵 -> 야채 -> 고기 -> 빵  / 포장하는 동안 추가적으로 들어오는 일 x / 재료 높이 쌓여도 상관x
    1 - 빵
    2 - 야채
    3 - 고기
*/

// 설계
/*

쌓인다  stack
주의  : 길이 1,000,000     시간복잡도  n^2이면 큰일남

1. ingredient 을 while로 계속 순회 
2. stack에 햄버거 재료를 쌓아서 완성되면 result +1
   1) 조건문으로 처음에는 무조건 1 그다음은 2 그다음은 3 그 다음은 1 이런식으로 1231이 되면 햄버거 하나 완성
   2) 이런식으로 반복문이 진행될때 원본배열은 계속 변경되어야 한다. 
   3) 1회전을 했는데 stack에서 하나의 햄버거도 못만들면  함수 중단

splice는 시간 복잡도가 O(n) slice도 O(n) pop()을 4번사용하자
*/
