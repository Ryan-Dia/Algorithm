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

// 풀이 2

function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5;
  let totalTime = 0;
  const cache = [];

  cities.forEach((cityName) => {
    const lowerCaseCityName = cityName.toLowerCase();
    if (cache.includes(lowerCaseCityName)) {
      moveToFrontOfCache(cache, lowerCaseCityName);
      totalTime += 1;
      return;
    }
    // 캐쉬 맨 앞쪽에다 cityName 저장
    updateCache(cache, lowerCaseCityName, cacheSize);
    totalTime += 5;
  });
  return totalTime;
}

function moveToFrontOfCache(cache, cityName) {
  const indexOfCity = cache.indexOf(cityName);
  cache.splice(indexOfCity, 1);
  cache.unshift(cityName);
}

function updateCache(cache, cityName, cacheSize) {
  if (cache.length >= cacheSize) {
    cache.pop();
  }
  cache.unshift(cityName);
}
