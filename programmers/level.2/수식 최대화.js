// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/67257

function solution(expression) {
  const operatorRegex = /[*+\\-]/g;
  const expressionRegex = /([\d.]+)([+\-*])/g;
  // 1. 연산자 개수 파악 (중복 제외, 최소 1개 ~ 최대 3개) Reference : expression은 적어도 1개 이상의 연산자를 포함하고 있습니다.
  const operators = new Set(expression.match(operatorRegex));
  // 2. 연산자를 기준으로 분리하여 배열로 변경  ex) ['100', '-', '200', '*', '300', '-', '500', '+', '20']
  const expressionArr = expression.replace(expressionRegex, '$1,$2,').split(',');
  // 3. 연산자 종류 개수에 따른 조합 구하기 (우선순위 조합은 1! = 1가지이며, 2! = 2가지이며, 연산자가 3개라면 3! = 6가지 조합)
  const operatorCombinations = generateOperatorCombinations(operators);
  // 4. 여러 연산자 우선수위에 따른 최댓값 구하기
  const maxSum = operatorCombinations.reduce((acc, combination) => {
    return Math.max(acc, Math.abs(calculateExpression(expressionArr, combination)));
  }, 0);
  return maxSum;
}

function generateOperatorCombinations([...operators]) {
  const permutations = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      permutations.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        const cur = arr.slice();
        const next = cur.splice(i, 1);
        permute(cur.slice(), [...m, ...next]);
      }
    }
  };
  permute(operators);

  return permutations;
}

function calculateExpression(expressionArr, operators) {
  let copiedFormula = [...expressionArr];
  operators.forEach((operator) => {
    let flag = false;
    copiedFormula = copiedFormula.reduce((acc, cur, index, arr) => {
      if (cur === operator) {
        acc.push(eval(`${acc.pop()} ${cur} ${arr[index + 1]}`));
        flag = true;
        return acc;
      }

      if (flag) {
        flag = false;
        return acc;
      }

      acc.push(cur);
      return acc;
    }, []);
  });
  return copiedFormula;
}
