function solution(cap, n, deliveries, pickups) {
  const saveCap = cap;
  let pickupCap = cap;
  let length = 0;
  let flag = true;
  let i = deliveries.length - 1;
  while (Math.max(...deliveries) !== 0) {
    console.log('----');
    console.log(i);
    console.log(length, 'length');
    console.log(deliveries, 'arr');
    console.log(pickupCap, 'pickCap');
    console.log(pickups);
    if (pickupCap - pickups[i] < 0 || !pickupCap) {
      console.log('hi');
      flag = true;
      pickups[i] -= pickupCap;
      pickupCap = saveCap;
    } else {
      pickupCap -= pickups[i];
      pickups[i] = 0;
    }
    console.log(pickupCap, 'pickCap');
    console.log(flag, 'flag');
    // 택배 배달
    if (!deliveries[i]) {
      i -= 1;
      continue;
    }
    if (cap - deliveries[i] > 0) {
      console.log(i, 'first');
      cap -= deliveries[i];
      deliveries[i] = 0;
      if (flag) {
        length += (i + 1) * 2;
        flag = false;
      }
      i -= 1;
      continue;
    }

    if (cap - deliveries[i] === 0) {
      console.log(i, 'second');
      cap = saveCap;
      deliveries[i] = 0;
      if (flag) {
        length += (i + 1) * 2;
        flag = false;
      }
      i -= 1;
      continue;
    }
    if (cap - deliveries[i] < 0) {
      console.log(i, 'last');
      deliveries[i] -= cap;
      cap = saveCap;
      flag = true;
    }
  }
  console.log(deliveries);
  console.log(length);
}
