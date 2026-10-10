//Definition for singly-linked list. Given in question itself

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// Solution

function removeEle(head, val) {
  let sentinel = new ListNode();
  sentinel.next = head;

  let prev = sentinel;
  while (prev && prev.next) {
    if (prev.next.val === val) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }
  return sentinel.next;
}


// Sample test case

// Test Case 1: Remove a value from the middle
// Input:  head = [1, 2, 6, 3, 4, 5, 6], val = 6
// Output: 1 -> 2 -> 3 -> 4 -> 5

let head1 = new ListNode(1,
  new ListNode(2,
    new ListNode(6,
      new ListNode(3,
        new ListNode(4,
          new ListNode(5,
            new ListNode(6)
          )
        )
      )
    )
  )
);

console.log(removeEle(head1, 6));


// Test Case 2: Remove the head
// Input:  head = [7, 7, 7, 1, 2], val = 7
// Output: 1 -> 2

let head2 = new ListNode(7,
  new ListNode(7,
    new ListNode(7,
      new ListNode(1,
        new ListNode(2)
      )
    )
  )
);

console.log(removeEle(head2, 7));


// Test Case 3: All nodes have the target value
// Input:  head = [1, 1, 1], val = 1
// Output: null

let head3 = new ListNode(1,
  new ListNode(1,
    new ListNode(1)
  )
);

console.log(removeEle(head3, 1));


// Test Case 4: No matching value
// Input:  head = [1, 2, 3], val = 4
// Output: 1 -> 2 -> 3

let head4 = new ListNode(1,
  new ListNode(2,
    new ListNode(3)
  )
);

console.log(removeEle(head4, 4));


// Test Case 5: Empty list
// Input: head = null, val = 1
// Output: null

console.log(removeEle(null, 1));



// Given the head of a linked list and an integer val, remove all the nodes of the 
// linked list that has Node.val == val, and return the new head.

//* Example 1:

// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]

//* Example 2:

// Input: head = [], val = 1
// Output: []

//* Example 3:

// Input: head = [7,7,7,7], val = 7
// Output: []
