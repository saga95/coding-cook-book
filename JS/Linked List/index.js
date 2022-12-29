class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  clear() {
    this.head = null;
  }

  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }

  getFirst() {
    return this.head;
  }
}

let node1 = new ListNode(2);
console.log("node1: ", node1);
let node2 = new ListNode(5);

node1.next = node2;
let list = new LinkedList(node1);

console.log("list: ", list);
console.log("head: ", list.head);
// console.log("next: ", list.head.next);
// console.log("data: ", list.head.next.data);
// console.log("size: ", list.size());
