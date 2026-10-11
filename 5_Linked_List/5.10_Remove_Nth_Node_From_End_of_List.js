//Definition for singly-linked list. Given in question itself

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


//^ Approach 2 two pointer 

var removeNthFromEnd = function (head, n) {
    // adding sentinel node at start
    let sentinel = new ListNode()
    sentinel.next = head

    // move the first Pointer ahead by n
    let firstPointer = sentinel
    for (let i = 0; i < n; i++) {
        firstPointer = firstPointer.next
    }

    // move both pointer till firstPointer reaches null
    let secondPointer = sentinel
    while (firstPointer.next) {
        secondPointer = secondPointer.next
        firstPointer = firstPointer.next
    }

    // delete second.next
    secondPointer.next = secondPointer.next.next

    return sentinel.next
};


// Sample test case

let head = new ListNode(
    1,
    new ListNode(
        2,
        new ListNode(
            3,
            new ListNode(
                4,
                new ListNode(5)
            )
        )
    )
);

let result = removeNthFromEnd(head, 2);

console.log(result);
// Output: ListNode {
//   val: 1,
//   next: ListNode {
//     val: 2,
//     next: ListNode {
//       val: 3,
//       next: ListNode {
//         val: 5,
//         next: null
//       }
//     }
//   }
// }


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