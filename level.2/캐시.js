// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/17680

function solution(cacheSize, cities) {
  if (!cacheSize) return cities.length * 5;
  let time = 0;
  cities.reduce((cache, city) => {
    if (cache.includes(city.toLowerCase())) {
      cache = cache.filter((x) => x !== city.toLowerCase());
      cache.push(city.toLowerCase());
      time += 1;
    } else {
      cache.push(city.toLowerCase());
      time += 5;
    }
    return cache.length > cacheSize ? cache.slice(1) : cache;
  }, []);
  return time;
}
