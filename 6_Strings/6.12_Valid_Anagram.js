//^ Approach 

var isAnagram = function (s, t) {
    if (s.length != t.length) return false

    let map = {}
    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) {
            map[s[i]] = 1
        } else {
            ++map[s[i]]
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (!map[t[i]] || map[t[i]] < 0) {
            return false
        }
        --map[t[i]]
    }
    return true
};


// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// * Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// * Example 2:

// Input: s = "rat", t = "car"

// Output: false