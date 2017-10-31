import Node from './node';

export default class Stack {

  constructor() {
    this._top = null;
    this.length = 0;
    this.items = [];
  }

  pop() {
    // delete the top element of stack
    if(this._length == 0) {
      return null;
    } else {
      let poppedNode = this.items.pop();
      this.length -= 1;
      this._top = this.items[this.length - 1] || null;
      return poppedNode;
    }
  }

  push(value) {
    // add element on top of stack
    let node = new Node(value);
    this.items.push(node);
    this._top = node;
    this.length += 1;
  }

  peek() {
    // returns value of top stack element
    return top;
  }
}
