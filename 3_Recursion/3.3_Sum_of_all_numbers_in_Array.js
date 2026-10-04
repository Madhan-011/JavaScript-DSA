let arr = [2,3,4,1,5,0]

function sum(n){
    if(n===0) return arr[0]
    return arr[n] + sum(n-1)
}
console.log(sum(arr.length-1))
