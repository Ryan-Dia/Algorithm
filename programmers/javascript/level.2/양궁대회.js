// 문제 풀이 :
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/92342

function solution(n, info) {
  let useN = n;
  const result = [];

  for (let i = 10; i >= 0; i--) {
    const exception = 10 - i;
    const ryanInfo = generateRyanInfo(n, info, exception);

    result.push(ryanInfo);
  }

  const scoreDifference = result.map((value, index) => {
    let apeach = 0;
    let ryan = 0;
    value.forEach((v, Vindex) => {
      if (v > info[Vindex]) ryan += 10 - Vindex;
      if (v < info[Vindex]) apeach += 10 - Vindex;
    });
    return ryan - apeach;
  });

  const maxDifference = Math.max(...scoreDifference);
  const maxIndex = scoreDifference.indexOf(maxDifference);
  const maxIndexCheck = scoreDifference.lastIndexOf(maxDifference);
  let box = [];
  if (maxDifference <= 0) return [-1];
  if (maxIndex !== maxIndexCheck) {
    box = scoreDifference.reduce((acc, cur, index) => {
      if (cur === maxDifference) {
        if (JSON.stringify(acc.at(-1)) === JSON.stringify(result[index])) return acc;
        acc.push(result[index]);
      }
      return acc;
    }, []);

    const box2 = { check: 0, arr: [] };
    for (let j = 10; j >= 0; j--) {
      for (let i = 0; i < box.length; i++) {
        if (box[i][j] && box[i][j] > box2.check) {
          box2.check = box[i][j];
          box2.arr = box[i];
        }
      }
      if (box2.check) return box2.arr;
    }
  } else {
    return result[maxIndex];
  }
}

function generateRyanInfo(n, infoA, exception) {
  let count = n;
  return infoA.map((info, index) => {
    if (index === exception && exception !== 10) return 0;
    if (index === infoA.length - 1 && count > 0) {
      return count;
    }
    const canWin = info + 1;
    if (count - canWin >= 0) {
      count -= canWin;
      return canWin;
    } else {
      return 0;
    }
  });
}
