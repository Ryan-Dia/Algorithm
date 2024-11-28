function solution(places) {
  const PARTICIPANT = 'P';
  const result = [];

  places.forEach((waitingRoom) => {
    let isBreak = false;

    for (let row = 0; row < waitingRoom.length; row++) {
      if (isNotParticipantInRow(waitingRoom[row], PARTICIPANT)) continue;
      if (isNotKeepingDistanceInRow(waitingRoom[row])) {
        result.push(0);
        isBreak = true;
        break;
      }

      const participantIndexes = [...waitingRoom[row]].flatMap((element, index) =>
        element === PARTICIPANT ? index : []
      );

      // 행 길이(대기실 개수)가 5이기 때문에
      if (row < 4) {
        if (hasParticipantBelow(participantIndexes, row, waitingRoom, PARTICIPANT)) {
          result.push(0);
          isBreak = true;
          break;
        }

        if (isNotKeepingDistanceInDiagonal(participantIndexes, row, waitingRoom)) {
          result.push(0);
          isBreak = true;
          break;
        }
      }

      if (row < 3) {
        if (isBelowEmptyAndNextIsParticipant(participantIndexes, row, waitingRoom)) {
          result.push(0);
          isBreak = true;
          break;
        }
      }
    }

    if (!isBreak) result.push(1);
  });
  return result;
}

function isNotKeepingDistanceInRow(value) {
  const firstCase = 'POP';
  const secondCase = 'PP';

  return value.indexOf(firstCase) !== -1 || value.indexOf(secondCase) !== -1;
}

function isNotParticipantInRow(value, PARTICIPANT) {
  return ![...value].includes(PARTICIPANT);
}

function hasParticipantBelow(participantIndexes, row, waitingRoom, PARTICIPANT) {
  return participantIndexes.some((value) => waitingRoom[row + 1][value] === PARTICIPANT);
}

function isNotKeepingDistanceInDiagonal(participantIndexes, row, waitingRoom) {
  const PARTICIPANT = 'P';
  const EMPTY = 'O';
  // 'P' 아래가 'O'이면서 왼쪽 또는 오른쪽이 'P' 일 때
  const firstCase = participantIndexes.some((value) => {
    const isEmptyTable = waitingRoom[row + 1][value] === EMPTY;
    const isParticipantOnLeft = waitingRoom[row + 1][value - 1] === PARTICIPANT;
    const isParticipantOnRight = waitingRoom[row + 1][value + 1] === PARTICIPANT;
    if ((isEmptyTable && isParticipantOnLeft) || (isEmptyTable && isParticipantOnRight)) {
      return true;
    }
  });

  // 오른쪽 or 왼쪽 O 이면서 그 아래가 P일때
  const secondCase = participantIndexes.some((value) => {
    const isEmptyTableOnRight = waitingRoom[row][value + 1] === EMPTY;
    const isEmptyTableOnleft = waitingRoom[row][value - 1] === EMPTY;
    const isDownThere = waitingRoom[row + 1][value + 1] === PARTICIPANT;
    const isDownThere2 = waitingRoom[row + 1][value - 1] === PARTICIPANT;
    if ((isEmptyTableOnleft && isDownThere2) || (isEmptyTableOnRight && isDownThere)) {
      return true;
    }
  });

  return firstCase || secondCase;
}

function isBelowEmptyAndNextIsParticipant(participantIndexes, row, waitingRoom) {
  const PARTICIPANT = 'P';
  const EMPTY = 'O';

  return participantIndexes.some((value) => {
    const isEmpty = waitingRoom[row + 1][value] === EMPTY;
    const isParticipant = waitingRoom[row + 2][value] === PARTICIPANT;
    if (isEmpty && isParticipant) return true;
  });
}
