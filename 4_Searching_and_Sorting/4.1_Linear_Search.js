function linearSearch(arr, target){

    for(let i = 0;i <arr.length;i++){
        if(arr[i]===target){
            return i;
        }
    }
    return -1;
}

let arr = [5, 2, 8, 2, 3, 1, 6, 2]

console.log(linearSearch(arr, 1))