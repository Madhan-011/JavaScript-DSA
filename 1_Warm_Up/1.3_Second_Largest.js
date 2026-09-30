//! Find the second largest number in an array

// function secondLargest(arr){
//     let firstNum = -Infinity;
//     let secondNum = -Infinity;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>firstNum){
//             secondNum = firstNum;
//             firstNum = arr[i];
//         }else if(arr[i]>secondNum){
//             secondNum = arr[i];
//         }
//     }
//     return secondNum;
// }

// let arr = [4,9,0,2,8.5,8,7,1]
// let result = secondLargest(arr)
// console.log(result)

//* Improved version of the code

function secondLargest(arr){
    if(arr.length<2){ //if the array has less than 2 elements, return null
        return null
    }
    let firstNum = -Infinity;
    let secondNum = -Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>firstNum){
            secondNum = firstNum;
            firstNum = arr[i];
        }else if(arr[i]>secondNum && arr[i]!=firstNum){
//if the current number is greater than secondNum and not equal to firstNum, update secondNum
            secondNum = arr[i];
        }
    }
    return secondNum;
}

let arr = [4,9,0,2,8.5,9,8,7,1]
let result = secondLargest(arr)
console.log(result)