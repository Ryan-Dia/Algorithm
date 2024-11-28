// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42626

function solution(scoville, K) {
  let answer = 0;
  const pq = new MinHeap();

  for (const s of scoville) pq.add(s);

  let sum = 0,
    a = 0,
    b = 0;

  while (!pq.isEmpty()) {
    a = pq.poll();
    if (a >= K) return answer;
    else if (pq.size() === 0) return -1;
    b = pq.poll();
    sum = a + b * 2;
    pq.add(sum);
    ++answer;
  }

  return -1;
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  add(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  poll() {
    if (this.size() === 0) {
      return null;
    }

    if (this.size() === 1) {
      return this.heap.pop();
    }

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return root;
  }

  isEmpty() {
    return this.size() === 0;
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.heap[parentIndex] <= this.heap[index]) {
        break;
      }

      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  bubbleDown(index) {
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let smallestIndex = index;

      if (
        leftChildIndex < this.size() &&
        this.heap[leftChildIndex] < this.heap[smallestIndex]
      ) {
        smallestIndex = leftChildIndex;
      }

      if (
        rightChildIndex < this.size() &&
        this.heap[rightChildIndex] < this.heap[smallestIndex]
      ) {
        smallestIndex = rightChildIndex;
      }

      if (smallestIndex === index) {
        break;
      }

      this.swap(index, smallestIndex);
      index = smallestIndex;
    }
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}
