//Definition for singly-linked list. Given in question itself

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


//^ Approach 1

function removeNth(head, n) {
  let sentinel = new ListNode();
  sentinel.next = head;

  let length = 0;
  while (head) {
    head = head.next;
    length++;
  }

  let prevPos = length - n;

  let prev = sentinel;
  for (let i = 0; i < prevPos; i++) {
    prev = prev.next;
  }
  prev.next = prev.next.next;

  return sentinel.next;
}


// Sample test case

// Test Case 1
let head1 = new ListNode(1,
  new ListNode(2,
    new ListNode(3,
      new ListNode(4,
        new ListNode(5)
      )
    )
  )
);

console.log(removeNth(head1, 2));
// Output: Linked list: 1 -> 2 -> 3 -> 5


// Test Case 2: Remove the head
let head2 = new ListNode(1,
  new ListNode(2,
    new ListNode(3)
  )
);

console.log(removeNth(head2, 3));
// Output: Linked list: 2 -> 3


// Test Case 3: Remove the last node
let head3 = new ListNode(1,
  new ListNode(2,
    new ListNode(3)
  )
);

console.log(removeNth(head3, 1));
// Output: Linked list: 1 -> 2


// Test Case 4: Single node
let head4 = new ListNode(1);

console.log(removeNth(head4, 1));
// Output: null


// Test Case 5: Two nodes, remove the first node
let head5 = new ListNode(1,
  new ListNode(2)
);

console.log(removeNth(head5, 2));
// Output: Linked list: 2



// Given the head of a linked list, remove the nth node from the end of the list and return its head.

//* Example 1:

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

//* Example 2:

// Input: head = [1], n = 1
// Output: []

//* Example 3:

// Input: head = [1,2], n = 1
// Output: [1]