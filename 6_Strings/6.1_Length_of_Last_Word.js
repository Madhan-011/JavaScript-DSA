//^ Approach 1 (Not interview friendly)

// Time - O(n), Space - O(n) beacuse s is creating new array

var lengthOfLastWord = function(s) {
    s = s.trim().split(" ")
    return s[s.length-1].length
};



//^ Approach 2 - using two loops

// T - O(n), S - O(1)

var lengthOfLastWord = function (s) {
    let n = s.length - 1 //start from last char

    // trim all spaces at the end
    while (n >= 0) {
        if (s[n] === " ") {
            --n
        } else {
            break
        }
    }
    // n is pointing where the last word starts

    // count the char till you reach a space
    let count = 0
    while (n >= 0) {
        if (s[n] !== " ") {
            --n
            count++
        } else {
            break
        }
    }
    return count
};


//^ Improvised Solution - smae as approach 1 above(^)

var lengthOfLastWord = function (s) {
    let n = s.length - 1 //start from last char

    // trim all spaces at the end
    while (n >= 0) {
        if (s[n] !== " ") break
        --n
    }
    // n is pointing where the last word starts

    // count the char till you reach a space
    let count = 0
    while (n >= 0) {
        if (s[n] === " ") break
        --n
        count++
    }
    return count
};


// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

 
// * Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

// * Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

// * Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.