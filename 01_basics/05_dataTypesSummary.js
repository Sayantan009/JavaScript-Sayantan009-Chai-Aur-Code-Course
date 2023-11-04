// Js is dynamically typed language

// Primitive Datatypes - 7
// String, Number, Boolean, null, undefined, Symbol, BigInt
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const Temp = null
let userEmail;
const id = Symbol('132')
const anotherId = Symbol('132')
const bigNumber = 2131n

console.log(id);
console.log(anotherId);
console.log(id === anotherId);


// Non-Primitive/Referance Datatypes - 3
// Array, Objects, Functions
const heros = ['shaktiman', 'naagraja', 'doga', 'krish', 'flying jatt']

const obj = {
    name: "Sayantan",
    age: 23
}

console.log(obj.name, obj.age);

const myFunc = function () {
    console.log("Hello World!!");
}
const func = () => {
    console.log("Hello World!!");
}

// const PrimitiveDatatypesOutput = {
//     Number: "number",
//     String: "string",
//     Boolean: "boolean",
//     null: "object",
//     undefined: " undefined",
//     Symbol: " symbol",
//     BigInt: " bigint"
// }

// const NonPrimitiveDatatypesOutput = {
//     Arrays: " object",
//     Function: " function",
//     Object: " object"
// }





// ************************* Memory *************************
// Stack (Primitive), Heap (Non-Primitive)
// Stack (Primitive) - It gives us a copy of our value. So if we change the referace will remail the same.
// Heap (Non-Primitive) - It gives us referance. So if we change it, the original value will change.

let myYtMain = "CodeWithHarry"
let anotherName = myYtMain

anotherName = "ProgrammingWithHarry"

console.log(myYtMain);
console.log(anotherName);

////////////////////////////////////////////

let userOne = {
    email: "userOne@gmail.com",
    upi: "userOne@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@gmail.com"

console.log(userOne);
console.log(userTwo);