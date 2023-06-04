function solution(id_list, report, k) {
  var answer = [];
  /*
    let box = []
    const IdNum = id_list.length
    const toto = [...new Set(report)]
    const kaka = toto.map(x=>x.split(" ").pop()) 
    const result={}
    kaka.forEach(x=> {result[x] = (result[x] || 0)+1})
    const papa = Object.keys(result).length
    console.log(result)
    console.log(papa)
    for(i = 0 ; i < papa; i++){
        if(result[Object.keys(result)[i]] >= k){      
            box.push(Object.keys(result)[i])
        }    
    }   
    for(i=0; i< IdNum; i++){
        const pp = id_list[i]
        let ckck = []
        report.map(x=>x.split(" ")[0].indexOf(pp) != -1 
                   ? box.indexOf(x.split(" ").pop()) != -1 
                        ? ckck.push(1) : null 
                   : null)
      
        answer.push(ckck.length)     
        ckck = []
    }
    console.log(answer)*/

  const obj_id = {};
  const objReport = {};
  const banList = [];

  //id_list를 객체로 변화시켜서 obj_id에 할당함
  id_list.map((id) => (obj_id[id] = 0));

  //중복 신고 제거 후 report배열로 변환
  const newReport = [...new Set(report)];

  const arrReport = newReport.map((rep) => rep.split(' '));

  //신고당한 아이디 객체 생성 {아이디: 횟수}

  arrReport.map((rep) => {
    if (!objReport[rep[1]]) {
      objReport[rep[1]] = 1;
    } else if (objReport[rep[1]]) {
      objReport[rep[1]] += 1;
    }
  });

  //신고 당한 아이디 객체 중 k 조건에 부합하지 않는 객체 제거

  Object.keys(objReport).map((key) => {
    if (objReport[key] >= k) {
      banList.push(key);
    }
  });

  //정지된 유저를 신고한 신고자 객체 생성
  //report에서 정지된 유저를 신고했던 유저에게 메일 발송 조건생성
  // 정지된 유저를 신고했을시 += 1
  // {유저명: 정지시킨 신고 수} 즉 {유저명 : 받아야할 메일 수}

  arrReport.map((rep) => {
    if (banList.includes(rep[1])) {
      obj_id[rep[0]] += 1;
    }
  });

  answer = Object.values(obj_id);
  return answer;
}
