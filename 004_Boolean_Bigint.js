var hasStarted = true;
var isDone = false;
function isEven(a) {
    return a % 2 === 0;
}
//console.log(isEven(6))
// <-----BigInt type------->
// To work with numbers bigger than the range of the regular number datatype
// In JS we can't read numbers beyond 2^53
//const maxNumber = Number.MAX_SAFE_INTEGER
var maxNumber = 90071992547409925n;
console.log(maxNumber);
var anotherBigNum = BigInt("90071992547409925");
console.log(anotherBigNum);
var sum_ = maxNumber + anotherBigNum;
console.log(sum_);
