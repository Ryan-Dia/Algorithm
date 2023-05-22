// 문제 링크 :  https://school.programmers.co.kr/learn/courses/30/lessons/42583
// 풀이 링크 : https://html-jc.tistory.com/654

// 풀이 1
function solution(bridge_length, weight, truck_weights) {
  const trucksCrossingBridge = [];
  let currentBridgeWeight = 0;
  let second = 0;

  while (true) {
    // 현재 다리의 무게가 0이고 대기중인 트럭이 없을 때 '초' return
    if (!currentBridgeWeight && !truck_weights.length) return second;

    // 다리를 지나가고있는 트럭이 있을 때
    if (trucksCrossingBridge.length) {
      // 트럭 현재위치 + 1
      for (let i = 0; i < trucksCrossingBridge.length; i++) {
        trucksCrossingBridge[i].position += 1;
      }

      const { truckWeight, position } = trucksCrossingBridge[0];
      //트럭의 현재위치 === 다리의 길이   => 즉 트럭이 다리를 건넜을 때
      if (position === bridge_length) {
        trucksCrossingBridge.shift();
        currentBridgeWeight -= truckWeight; // 다리 현재 무게 - 다리건넌 트럭무게
      }
    }

    const currentTruckWeight = truck_weights[0];
    // 현재 다리무게 + 현재 트럭무게 <= weight
    if (currentBridgeWeight + currentTruckWeight <= weight) {
      trucksCrossingBridge.push({ truckWeight: currentTruckWeight, position: 0 });
      currentBridgeWeight += currentTruckWeight;
      truck_weights.shift();
    }
    second += 1; // 1초 +
  }
}

// 다른 사람 풀이 1
function solution(bridge_length, weight, truck_weights) {
  // '다리'를 모방한 큐에 간단한 배열로 정리 : [트럭무게, 얘가 나갈 시간].
  let time = 0,
    qu = [[0, 0]],
    weightOnBridge = 0;

  // 대기 트럭, 다리를 건너는 트럭이 모두 0일 때 까지 다음 루프 반복
  while (qu.length > 0 || truck_weights.length > 0) {
    // 1. 현재 시간이, 큐 맨 앞의 차의 '나갈 시간'과 같다면 내보내주고,
    //    다리 위 트럭 무게 합에서 빼준다.
    if (qu[0][1] === time) weightOnBridge -= qu.shift()[0];

    if (weightOnBridge + truck_weights[0] <= weight) {
      // 2. 다리 위 트럭 무게 합 + 대기중인 트럭의 첫 무게가 감당 무게 이하면
      //    다리 위 트럭 무게 업데이트, 큐 뒤에 [트럭무게, 이 트럭이 나갈 시간] 추가.
      weightOnBridge += truck_weights[0];
      qu.push([truck_weights.shift(), time + bridge_length]);
    } else {
      // 3. 다음 트럭이 못올라오는 상황이면 얼른 큐의
      //    첫번째 트럭이 빠지도록 그 시간으로 점프한다.
      //    참고: if 밖에서 1 더하기 때문에 -1 해줌
      if (qu[0]) time = qu[0][1] - 1;
    }
    // 시간 업데이트 해준다.
    time++;
  }
  return time;
}

// 다른 사람 풀이 2
function solution(bridge_length, weight, truck_weights) {
  // answer: 걸린 시간
  let answer = 0;

  // queue: 현재 다리상태
  let queue = [];

  // queueSum: 현재 다리 무게
  let queueSum = 0;

  // queue의 길이는 다리 길이로 하고 다리 하나하나를 0으로 초기화
  for (let i = 0; i < bridge_length; i++) {
    queue.push(0);
  }

  // now_truck : 현재 다리를 지나가는 트럭
  let now_truck = truck_weights.shift();

  // 큐에 트럭을 맨앞에 넣고 다리를 앞으로 한칸씩 땡김 (맨뒤에서 하나 제거)
  queue.unshift(now_truck);
  queue.pop();

  // 다리 무게 증가
  queueSum += now_truck;

  // 시간 증가
  answer++;

  // 쉬지않고 큐에 트럭을 넣거나 다리를 건너기 때문에 queueSum 이 0이 되면 모든 트럭이 지나간 것.
  while (queueSum) {
    // 다리에 있는 트럭 이동
    queueSum -= queue.pop();

    // 일단 다리를 안건넌 트럭 하나 빼고,
    now_truck = truck_weights.shift();

    // 다리에 들어갈 수 있으면 큐(다리)에 트럭 넣고 무게 증가
    if (now_truck + queueSum <= weight) {
      queue.unshift(now_truck);
      queueSum += now_truck;
    }
    // 다리에 들어갈 수 없으면 0을 넣고 뺏던거 다시 트럭집단에 고스란히 넣어줌
    else {
      queue.unshift(0);
      truck_weights.unshift(now_truck);
    }
    answer++;
  }
  return answer;
}
