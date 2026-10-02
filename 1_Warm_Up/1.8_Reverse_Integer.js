function reverseInteger(x){
    let xCopy = x;
    x = Math.abs(x);

    let reversed = 0;
    while(x>0){
        let last = x%10;
        reversed = (10*reversed) + last;
        x = Math.floor(x/10);
    }
    
    let limit = Math.pow(2,31);
    if(reversed < -limit || reversed > limit) return 0;

    return (xCopy < 0) ? -reversed : reversed;
}

let num = -1234567890;

let result = reverseInteger(num);
console.log(result);