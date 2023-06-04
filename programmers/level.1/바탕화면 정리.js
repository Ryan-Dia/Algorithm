// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/161990
// 문제 풀이 : https://html-jc.tistory.com/656

function solution(wallpaper) {
  let top = null; // 맨 위족
  let bottom; // 맨 아래쪽
  let left = wallpaper[0].length; // 맨 왼쪽
  let right = 0; // 맨 오른쪽

  for (let i = 0; i < wallpaper.length; i++) {
    const firstFileIndexAtLeft = wallpaper[i].indexOf('#');
    // "#" 이 존재할 때
    if (firstFileIndexAtLeft !== -1) {
      left = Math.min(left, firstFileIndexAtLeft);
      if (top === null) top = i;
      bottom = i + 1;
    }

    let firstFileIndexAtRight = wallpaper[i].lastIndexOf('#');
    if (firstFileIndexAtRight !== -1) {
      right = Math.max(right, firstFileIndexAtRight + 1);
    }
  }
  return [top, left, bottom, right];
}
