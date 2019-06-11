// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null; 
    this.length = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if ( this.length === 0 ) {
      this.front = newNode;
      this.back = newNode;
      this.length++;
      return this.length;
    } else {
      let oldBack = this.back;
      this.back = newNode;
      oldBack.next = this.back;
      this.length++;
      return this.length;
    }
  }

  dequeue() {
    if (!this.front) return null;
    if (this.length === 1) {
      let oldBack = this.back;
      this.back = null;
      this.front = null;
      this.length--;
      return oldBack.value;
    } else {
      let oldFront = this.front;
      this.front = this.front.next;
      this.length--;
      return oldFront.value;
    }
  }


  size() {
    return this.length;
  }

}

exports.Node = Node;
exports.Queue = Queue;