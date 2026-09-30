//*1. Return the index of an element in an array. If the element is not found, return -1

// function searchElement(arr, num){
//     for(let i=0; i<arr.length;i++){
//         if(arr[i]==num){
//             return i;
//         }
//     }
//     return -1;
// }
// let arr = [1,2,3,4,5];
// let result = searchElement(arr, 10);
// console.log(result);


//*2. Count the number of negative numbers in an array

// let arr = [2,-9,17,0,1,-10,-4,8];

// function negativeNumCount(arr){
//     let count = 0;
//     for(let i=0; i<arr.length;i++){
//         if(arr[i]<0){
//             count++;
//         }
//     }
//     return count;
// }
// let result = negativeNumCount(arr);
// console.log(result);


//*3. Find the largest number in an array

// function findLargest(arr){
//     let max = arr[0];//or -Infinity
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>=max){
//             max = arr[i]
//         }
//     }
//     return max;
// }

// let arr = [5,0,10,8,17,1,-17,-20];
// let result = findLargest(arr)
// console.log(result);


//*4. Find the smallest number in an array

function findSmallest(arr){
    let min = arr[0];//or Infinity
    for(let i=0;i<arr.length;i++){
        if(arr[i]<=min){
            min = arr[i]
        }
    }
    return min;
}

let arr1 = [-10,-5,-20,0,5,10];
let result1 = findSmallest(arr1)
console.log(result1);