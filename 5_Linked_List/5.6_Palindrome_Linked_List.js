let isPalindrome = function (head) {
    //finding middle element
    let slow = fast = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    //Reverse the linked list from middle
    let prev = null
    let curr = slow
    while (curr) {
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }

    //check if both revresed and original is palindrome or not
    firstList = head
    secondList = prev
    while (secondList) {
        if (firstList.val !== secondList.val) {
            return false
        }
        firstList = firstList.next
        secondList = secondList.next
    }
    return true
};

// sample test case

function Node(val) {
  this.val = val;
  this.next = null;
}

function createList(arr) {
  let head = new Node(arr[0]);
  let curr = head;

  for (let i = 1; i < arr.length; i++) {
    curr.next = new Node(arr[i]);
    curr = curr.next;
  }

  return head;
}

console.log(isPalindrome(createList([1, 2, 3, 2, 1]))); // true
console.log(isPalindrome(createList([1, 2, 2, 1])));    // true
console.log(isPalindrome(createList([1, 2, 3, 4])));    // false
console.log(isPalindrome(createList([1])));             // true
console.log(isPalindrome(createList([1, 2])));          // false
console.log(isPalindrome(createList([1, 2, 3, 1])));    // false


// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

//* Example 1:

// Input: head = [1,2,2,1]
// Output: true

//* Example 2:

// Input: head = [1,2]
// Output: false
 