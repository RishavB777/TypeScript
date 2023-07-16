// Any Type
// The most flexible code in TypeScript. It essentially turns off all type checking for variables it is applied to
var myfavNum = 5;
myfavNum = "Rb";
// Unknown Type
// unknown is a safer alternative to any since it still enforces type checking and type safety.
// can hold values of any type, but later on enforces type checking based on the assigned value type.
var favnum;
favnum = 14;
favnum = true;
favnum = "RB";
if (typeof favnum === "number") {
    console.log(favnum + 5);
}
