//1. function declaration

function add(a, b) {
    return a + b;
}
let value = add(2,3);
console.log(value);

//1. Another way without return statement

function multiply(a, b) {
    let result = a * b;
    console.log(result);
}
multiply(2, 3);

//2. voting eligibility

function isEligibleToVote(age) {
    if(age < 1){
        console.log("Invalid Input");
    }else if(age < 18){
        console.log("Not eligible to vote");
    }else{
        console.log("Eligible to vote");
    }
}

isEligibleToVote(17);
isEligibleToVote(25);
isEligibleToVote(-5);

//3. Even or Odd

function isEvenOdd(num){
    if(num % 2 ==0){
        console.log(num+ " is Even");
    }else{
        console.log(num+ " is Odd");
    }
}

isEvenOdd(10)


//4. sum of all arguments

function sum(...args){
    return args.reduce((acc, curr) => acc + curr, 0);
}
let result = sum(1,2,3,4,5);
console.log(result);