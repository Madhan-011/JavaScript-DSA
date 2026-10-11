//Definition for singly-linked list. Given in question itself

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
 
//^ Approach 


let deleteDuplicates = function (head) {
  let curr = head;
  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
};


// Sample test case

// Test Case 1: Consecutive duplicates
// Input: 1 -> 1 -> 2
// Expected: 1 -> 2

let head1 = new ListNode(1,
    new ListNode(1,
        new ListNode(2)
    )
);

console.log(deleteDuplicates(head1));


// Test Case 2: Multiple duplicates
// Input: 1 -> 1 -> 2 -> 3 -> 3
// Expected: 1 -> 2 -> 3

let head2 = new ListNode(1,
    new ListNode(1,
        new ListNode(2,
            new ListNode(3,
                new ListNode(3)
            )
        )
    )
);

console.log(deleteDuplicates(head2));


// Test Case 3: All nodes are duplicates
// Input: 1 -> 1 -> 1
// Expected: 1

let head3 = new ListNode(1,
    new ListNode(1,
        new ListNode(1)
    )
);

console.log(deleteDuplicates(head3));


// Test Case 4: No duplicates
// Input: 1 -> 2 -> 3
// Expected: 1 -> 2 -> 3

let head4 = new ListNode(1,
    new ListNode(2,
        new ListNode(3)
    )
);

console.log(deleteDuplicates(head4));


// Test Case 5: Empty list
// Input: null
// Expected: null

console.log(deleteDuplicates(null));


// Test Case 6: Single node
// Input: 5
// Expected: 5

console.log(deleteDuplicates(new ListNode(5)));


// Test Case 7: Duplicates at the beginning and end
// Input: 1 -> 1 -> 2 -> 3 -> 3
// Expected: 1 -> 2 -> 3

let head7 = new ListNode(1,
    new ListNode(1,
        new ListNode(2,
            new ListNode(3,
                new ListNode(3)
            )
        )
    )
);

console.log(deleteDuplicates(head7));

// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. 
// Return the linked list sorted as well.

// * Example 1:

// Input: head = [1,1,2]
// Output: [1,2]

// * Example 2:

// Input: head = [1,1,2,3,3]
// Output: [1,2,3]
