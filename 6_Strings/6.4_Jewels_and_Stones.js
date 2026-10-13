//^ Approach 1 - using built in methods

var numJewelsInStones = function (jewels, stones) {
    let count = 0
    for (let i = 0; i < stones.length; i++) {
        if (jewels.includes(stones[i])) {
            count++
        }
    }
    return count
};


//^ Approach 2 - without using built in methods O(m*n)

var numJewelsInStones = function (jewels, stones) {
    let count = 0
    for (let i = 0; i < stones.length; i++) {
        for (let j = 0; j < jewels.length; j++) {
            if (jewels[j] === stones[i]) {
                ++count
            }
        }
    }
    return count
};


//^ Approach 3 - better approach O(n)

var numJewelsInStones = function (jewels, stones) {
    let JewSet = new Set()
    for (let i = 0; i < jewels.length; i++) {
        JewSet.add(jewels[i])
    }

    let count = 0
    for (let j = 0; j < stones.length; j++) {
        if (JewSet.has(stones[j])) {
            ++count
        }
    }
    return count
};


// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. 
// Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".


// * Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

// * Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0