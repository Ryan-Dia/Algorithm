// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/49993

function solution(skill, skill_trees) {
  let count = skill_trees.length;

  skill_trees.forEach((skillTree) => {
    const skillQueue = [...skill];
    for (let i = 0; i < skillTree.length; i++) {
      if (!skill.includes(skillTree[i])) continue;
      if (skillQueue.shift() !== skillTree[i]) {
        count -= 1;
        break;
      }
    }
  });
  return count;
}

// 문제

/*
 선행스킬은  조건 이 참이어야 배울 수 있다. 
 skill -> 1이상 20 이하인 배열 중복 x
 skill_trees  > 중복 x  스킬을 나타내는 문자열 ,  길이가 2이상 26이하인 
 
 데이터가 크지 않으니 거의 제한 x
 모두 중복이 없다. 
 
 return 가능한 스킬트리의 개수 
 return number
*/

// 설계
/*
    skil 배열을 먼저 만들어서 해당 각 스킬트리마다 해당 스킬이 나오면 하나씩 제거  
    즉 배열로  arr[0]으로 판단
    
    if(선행 스킬이 필요한 스킬이니?)
    if(현재 스킬을 배우기 위한 선행 스킬을 배웠니?)
    ture 다음으로 pass 아니면 contiue
    
*/
