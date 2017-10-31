import Node from './node';

export default class PriorityQueue {
    constructor() {
  		this.heap = new MaxHeap();
  	}

  	unshift(data, priority) {
      // add element of queue by priority
  	}

  	shift() {
      // delete first element of queue
  	}

  	size() {
      // returns size of queue
  	}

  	isEmpty() {
      // returns true if queue is empty, else returns false
  	}
}
