function solution(new_id) {
  var answer = '';

  //1단계  (소문자 대문자 바꾸기 복습 <배열이 아닌데도 가능>)
  let result = new_id.toLowerCase();

  //2단계
  const reg = /[^\w\sㄱ-힣\-.]/g;
  result = result.replace(reg, ``);

  //3단계
  const kaka = /\.{2,}/g;
  result = result.replace(kaka, `.`);

  //4단계

  const fofo = /^\.|\.$/g;
  result = result.replace(fofo, ``);

  //5단계

  if (result === '') {
    result = 'a';
  }

  //6단계

  if (result.length >= 16) {
    result = result.slice(0, 15);
    const wowo = /\.$/g;
    result = result.replace(wowo, ``);
  }

  // 7단계

  if (result.length <= 2) {
    result = result.split('');
    const yoyo = result[result.length - 1];
    result = result.join('');

    if (result.length === 1) {
      result = result + yoyo.repeat(2);
    } else {
      result = result + yoyo;
    }
  }

  return result;
}
