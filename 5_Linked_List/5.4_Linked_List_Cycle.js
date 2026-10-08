// Approach 1

function Linked_List_Cycle(head) {
  let newNode = new Set();
  let curr = head;

  while (curr) {
    if (newNode.has(curr)) {
      return true;
    }
    newNode.add(curr);
    curr = curr.next;
  }
  return false;
}

function Node(val) {
  this.val = val;
  this.next = null;
}

// Create nodes
let node1 = new Node(3);
let node2 = new Node(2);
let node3 = new Node(0);
let node4 = new Node(-4);

// Connect them
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // Cycle: -4 → 2

console.log(Linked_List_Cycle(node1));



// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.
// Internally, pos is used to denote the index of the node that tail's next pointer is connected to. 
// Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

//* Example 1:

// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

//* Example 2:

// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

//* Example 3:

// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.