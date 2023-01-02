function solution(fees, records) {
  const parkingData = new ParkingData(fees, records);
  return parkingData.getResult();
}

class ParkingData {
  #fees;

  #parkingData;

  #result;

  constructor(fees, records) {
    this.#fees = fees;
    this.records = records;
    this.#parkingData = {};
    this.#run();
  }

  #run() {
    this.#saveCarData();
    this.#sort();
    this.#calculateFee();
  }

  getResult() {
    return this.#result;
  }

  #saveCarData() {
    let carData = {};
    this.records.forEach((record) => {
      let [passTime, carNumber, inOrOut] = record.split(' ');
      let [hour, minute] = passTime.split(':');
      passTime = hour * 60 + +minute;
      if (inOrOut === 'IN') return (carData[carNumber] = passTime);
      this.#parkingData[carNumber] = this.#parkingData[carNumber] ?? 0;
      this.#parkingData[carNumber] += passTime - carData[carNumber];
      return (carData[carNumber] = null);
    });
    for (let carNumber in carData) {
      if (carData[carNumber] !== null) {
        this.#parkingData[carNumber] = this.#parkingData[carNumber] ?? 0;
        this.#parkingData[carNumber] += 1439 - carData[carNumber];
      }
    }
  }
  #sort() {
    this.#parkingData = Object.entries(this.#parkingData).sort(([a], [b]) => +a - +b);
  }

  #calculateFee() {
    const [basicTime, basicFee, unitTime, unitFee] = this.#fees;
    this.#result = this.#parkingData.map(([_, stayTime]) => {
      let divide = (stayTime - basicTime) / unitTime;
      divide < 1 ? (divide = 1) : (divide = Math.ceil(divide));
      if (stayTime > basicTime) return basicFee + divide * unitFee;
      return basicFee;
    });
  }
}

//  .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
/*
parkingData = {
    "4423" : {
        in : "06:55",
        out : "23:22"
    }
}

**/

// 기본 3시간 무료
// 기본 요금 5천원
// 10분당 600원

// fees = [기본시간(분), 기본요금(원), 단위 시간(분), 단위 요금(원)]
