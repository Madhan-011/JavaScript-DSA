//Definition for singly-linked list. Given in question itself

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
 
//^ Approach 


let oddEvenList = function (head) {
  if (!head || !head.next) return head;

  let odd = head;
  let even = head.next;
  let evenStart = even;

  while (odd.next && even.next) {
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even = even.next;
  }

  odd.next = evenStart;

  return head;
};


// Sample test case

// Test Case 1: Odd number of nodes
// Input: 1 -> 2 -> 3 -> 4 -> 5
// Expected: 1 -> 3 -> 5 -> 2 -> 4

let head1 = new ListNode(1,
    new ListNode(2,
        new ListNode(3,
            new ListNode(4,
                new ListNode(5)
            )
        )
    )
);

console.log(oddEvenList(head1));


// Test Case 2: Even number of nodes
// Input: 2 -> 1 -> 3 -> 5 -> 6 -> 4 -> 7
// Expected: 2 -> 3 -> 6 -> 7 -> 1 -> 5 -> 4

let head2 = new ListNode(2,
    new ListNode(1,
        new ListNode(3,
            new ListNode(5,
                new ListNode(6,
                    new ListNode(4,
                        new ListNode(7)
                    )
                )
            )
        )
    )
);

console.log(oddEvenList(head2));


// Test Case 3: Two nodes
// Input: 1 -> 2
// Expected: 1 -> 2

let head3 = new ListNode(1,
    new ListNode(2)
);

console.log(oddEvenList(head3));


// Test Case 4: Single node
// Input: 1
// Expected: 1

let head4 = new ListNode(1);

console.log(oddEvenList(head4));


// Test Case 5: Empty list
// Input: null
// Expected: null

console.log(oddEvenList(null));


// Test Case 6: Four nodes
// Input: 1 -> 2 -> 3 -> 4
// Expected: 1 -> 3 -> 2 -> 4

let head6 = new ListNode(1,
    new ListNode(2,
        new ListNode(3,
            new ListNode(4)
        )
    )
);

console.log(oddEvenList(head6));


// Given the head of a singly linked list, group all the nodes with odd indices 
// together followed by the nodes with even indices, and return the reordered list.

// The first node is considered odd, and the second node is even, and so on.

// Note that the relative order inside both the even and odd groups should remain as it was in the input.

// You must solve the problem in O(1) extra space complexity and O(n) time complexity.

//* Example 1:

// Input: head = [1,2,3,4,5]
// Output: [1,3,5,2,4]

//* Example 2:

// Input: head = [2,1,3,5,6,4,7]
// Output: [2,3,6,7,1,5,4]
