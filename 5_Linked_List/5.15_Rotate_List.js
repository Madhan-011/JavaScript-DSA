var rotateRight = function (head, k) {  
    if (!head || !head.next) return head

    // calculate the length
    let length = 0
    let curr = head
    while (curr) {
        curr = curr.next
        length++
    }

    // to avoid unnnecessary rotations
    k = k % length

    // move fast pointer k steps ahead
    let fast = head
    for (let i = 0; i < k; i++) {
        fast = fast.next
    }

    // reaching the end of the list
    let slow = head
    while (fast.next) {
        slow = slow.next
        fast = fast.next
    }

    fast.next = head
    let newHead = slow.next
    slow.next = null

    return newHead
};



// Given the head of a linked list, rotate the list to the right by k places.

// * Example 1:

// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]

// * Example 2:

// Input: head = [0,1,2], k = 4
// Output: [2,0,1]