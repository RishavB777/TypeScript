// Declaration  parameters
function greet(name:string,id:number){
    console.log(`Welcome, ${name} and your id is ${id}`)
}

// Fat Arrow function
const greet1 = (name:string, id:number) =>{
    console.log(`Welcome, ${name} and your id is ${id}`)
}
// Return type
const greet2 = (name:string, id:number):string =>{
    return `Welcome, ${name} and your id is ${id}`
}

const ispalindrome = (palin:string):boolean=>{
    let rev = palin.split("").reverse().join("");
    return rev===palin
}

// Function call: arguments
console.log(ispalindrome("12321") )