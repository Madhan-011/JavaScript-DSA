//^ Approach 1 

var maxFreqSum = function (s) {
    // freq of char
    let hmap = {}
    for (let i = 0; i < s.length; i++) {
        if (!hmap[s[i]]) {
            hmap[s[i]] = 1
        } else {
            ++hmap[s[i]]
        }
    }

    //vowel and cons max
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let maxVow = 0
    let maxCons = 0
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            if (maxVow < hmap[s[i]]) {
                maxVow = hmap[s[i]]
            }
        } else {
            if (maxCons < hmap[s[i]]) {
                maxCons = hmap[s[i]]
            }
        }
    }
    return maxCons + maxVow
};


//^ Optimized Solution

var maxFreqSum = function (s) {
    // freq of char
    let map = {}
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = !map[s[i]] ? 1 : ++map[s[i]]
    }

    //vowel and cons max
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let maxVow = 0
    let maxCons = 0
    let mapKeys = Object.keys(map) // used to reduce the no of iteration
    for (let i = 0; i < mapKeys.length; i++) {
        if (vowels.includes(mapKeys[i])) {
            maxVow = Math.max(maxVow, map[mapKeys[i]])
        } else {
            maxCons = Math.max(maxCons, map[mapKeys[i]])
        }
    }
    return maxCons + maxVow
};


// You are given a string s consisting of lowercase English letters ('a' to 'z').

// Your task is to:

// Find the vowel (one of 'a', 'e', 'i', 'o', or 'u') with the maximum frequency.
// Find the consonant (all other letters excluding vowels) with the maximum frequency.
// Return the sum of the two frequencies.

// Note: If multiple vowels or consonants have the same maximum frequency, 
// you may choose any one of them. If there are no vowels or no consonants in the string, consider their frequency as 0.

// The frequency of a letter x is the number of times it occurs in the string.
 

// * Example 1:

// Input: s = "successes"

// Output: 6

// Explanation:

// The vowels are: 'u' (frequency 1), 'e' (frequency 2). The maximum frequency is 2.
// The consonants are: 's' (frequency 4), 'c' (frequency 2). The maximum frequency is 4.
// The output is 2 + 4 = 6.

// * Example 2:

// Input: s = "aeiaeia"

// Output: 3

// Explanation:

// The vowels are: 'a' (frequency 3), 'e' ( frequency 2), 'i' (frequency 2). The maximum frequency is 3.
// There are no consonants in s. Hence, maximum consonant frequency = 0.
// The output is 3 + 0 = 3.