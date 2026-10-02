function revStr(str){

    let len = str.length
    let halflen = Math.floor(len/2)

    for(let i=0;i<halflen;i++){
        let temp = str[i];
        str[i]= str[len-1-i]
        str[len-1-i] = temp
    }
    return str
}

let str = ["h","e","l","l","o"]
console.log(revStr(str))


// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

 

//* Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

//* Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]