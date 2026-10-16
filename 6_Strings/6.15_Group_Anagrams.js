//& Approach - 2  using hashed key

var groupAnagrams = function (strs) {
  let map = {};

  for (let i = 0; i < strs.length; i++) {
    //Create a key
    let freqArr = Array(26).fill(0);
    let s = strs[i];

    for (let j = 0; j < s.length; j++) {
      let index = s[j].charCodeAt() - "a".charCodeAt();
      ++freqArr[index];
    }

    let key = "";
    for (let k = 0; k < 26; k++) {
      key = key + String.fromCharCode(k) + freqArr[k];
    }

    //fill the map
    !map[key] ? (map[key] = [s]) : map[key].push(s);
  }
  return [...Object.values(map)];
};



// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// * Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

// * Example 2:

// Input: strs = [""]

// Output: [[""]]

// * Example 3:

// Input: strs = ["a"]

// Output: [["a"]]
