// Approach 2


//^ Floyd's Cycle Detection Algorithm

//Floyd's Cycle Detection Algorithm is a technique for detecting a cycle in a linked list using two pointers,
// where one moves one step and the other moves two steps. If they meet, a cycle exists.

function floydAlgo(head) {
  if (!head) return false;

  let slow = head;
  let fast = head.next;

  while (slow !== fast) {
    if (fast === null || fast.next === null) return false;

    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
}

function Node(val) {
  this.val = val;
  this.next = null;
}

let node1 = new Node(3);
let node2 = new Node(2);
let node3 = new Node(0);
let node4 = new Node(-4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // cycle

console.log(floydAlgo(node1));
