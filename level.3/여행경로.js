function solution(tickets) {
  const answer = [];
  function dfs(airport, tickets, path) {
    const newPath = [...path, airport];

    // dfs 끝나는 조건
    if (!tickets.length) {
      answer.push(newPath);
      return;
    }

    tickets.map((ticket, index) => {
      // from이 airport와 같을 때 -> 이전 ticket의 도착지와 이번 ticket의 출발지가 같을 때
      if (ticket[0] === airport) {
        const copiedTickets = [...tickets];
        const [[from, to]] = copiedTickets.splice(index, 1);
        dfs(to, copiedTickets, newPath);
      }
    });
  }
  dfs('ICN', tickets, []);
  // 문제 조건에 맞게 알파벳 순서가 앞서는 경로를 return

  return answer.sort()[0];
}
