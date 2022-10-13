function solution(s) {
  s = s.replace(/[\{\}]/g, "").split(",");
  const checkRepetition = s.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(checkRepetition)
    .sort(([, a], [, b]) => b - a)
    .map((x) => +x[0]);
}

//보충해야할 점
/// 객체다루는 법
//중복체크 reduce
// 정규표현식
// sort
// map과 filter 차이 계속 filter(x=> +x[0]) 이렇게하는데 바뀐게 하나도 없어서 왜 안되지 했음
//Object.entries
