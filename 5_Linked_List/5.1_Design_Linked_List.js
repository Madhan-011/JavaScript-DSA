function Node(val) {
  this.val = val;
  this.next = null;
}

var MyLinkedList = function () {
  this.head = null;
  this.size = 0;
};

MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1;

  let curr = this.head;
  for (let i = 0; i < index; i++) {
    curr = curr.next;
  }
  return curr.val;
};

MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

MyLinkedList.prototype.addAtTail = function (val) {
  let newNode = new Node(val);

  if (this.head === null) {
    this.head = newNode;
  } else {
    let curr = this.head;

    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = newNode;
  }
  this.size++;
};

MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) return;
  let newNode = new Node(val);

  if (index === 0) {
    this.addAtHead(val);
    return;
  } else if (index === this.size) {
    this.addAtTail(val);
    return;
  } else {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    newNode.next = curr.next;
    curr.next = newNode;
  }

  this.size++;
};

MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;

  if (index === 0) {
    this.head = this.head.next;
  } else {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
  }
  this.size--;
};

// Create an empty linked list
var obj = new MyLinkedList();

console.log("Initial size:", obj.size);
console.log("Initial head:", obj.head);

// Add at head
obj.addAtHead(10);
console.log("After addAtHead(10):", obj.get(0));

// Add at tail
obj.addAtTail(20);
console.log("After addAtTail(20):", obj.get(1));

// Add another at tail
obj.addAtTail(30);
console.log("After addAtTail(30):", obj.get(2));

// Add 15 at index 1
obj.addAtIndex(1, 15);

console.log("After addAtIndex(1, 15):");
console.log("Index 0:", obj.get(0));
console.log("Index 1:", obj.get(1));
console.log("Index 2:", obj.get(2));
console.log("Index 3:", obj.get(3));

// Delete index 2
obj.deleteAtIndex(2);

console.log("After deleteAtIndex(2):");
console.log("Index 0:", obj.get(0));
console.log("Index 1:", obj.get(1));
console.log("Index 2:", obj.get(2));

console.log("Final size:", obj.size);



// Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
// A node in a singly linked list should have two attributes: val and next.
// val is the value of the current node, and next is a pointer/reference to the next node.
// If you want to use the doubly linked list, you will need one more attribute prev to
// indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

// Implement the MyLinkedList class:

// MyLinkedList() Initializes the MyLinkedList object.
// int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
// void addAtHead(int val) Add a node of value val before the first element of the linked list.
//  After the insertion, the new node will be the first node of the linked list.
// void addAtTail(int val) Append a node of value val as the last element of the linked list.
// void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list.
// If index equals the length of the linked list, the node will be appended to the end of the linked list.
// If index is greater than the length, the node will not be inserted.
// void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.

// Example 1:

// Input
// ["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
// [[], [1], [3], [1, 2], [1], [1], [1]]
// Output
// [null, null, null, null, 2, null, 3]

// Explanation
// MyLinkedList myLinkedList = new MyLinkedList();
// myLinkedList.addAtHead(1);
// myLinkedList.addAtTail(3);
// myLinkedList.addAtIndex(1, 2);    // linked list becomes 1->2->3
// myLinkedList.get(1);              // return 2
// myLinkedList.deleteAtIndex(1);    // now the linked list is 1->3
// myLinkedList.get(1);              // return 3
