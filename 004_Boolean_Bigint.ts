let hasStarted:Boolean = true;
let isDone:Boolean = false;

function isEven(a:number):Boolean{
    return a%2 === 0;
}

//console.log(isEven(6))

// <-----BigInt type------->
// To work with numbers bigger than the range of the regular number datatype
// In JS we can't read numbers beyond 2^53

//const maxNumber = Number.MAX_SAFE_INTEGER

let maxNumber:bigint = 90071992547409925n;
console.log(maxNumber);

let anotherBigNum = BigInt("90071992547409925");
console.log(anotherBigNum);

let sum_:bigint = maxNumber + anotherBigNum;
console.log(sum_)
