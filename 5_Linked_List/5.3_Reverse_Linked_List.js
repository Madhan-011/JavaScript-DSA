function reverseList(head) {
  let prev = null;
  let curr = head;

  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
}

let head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
};

let result = reverseList(head);

console.log(result);



// Given the head of a singly linked list, reverse the list, and return the reversed list.

//* Example 1:

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

//* Example 2:

// Input: head = [1,2]
// Output: [2,1]

//* Example 3:

// Input: head = []
// Output: []
