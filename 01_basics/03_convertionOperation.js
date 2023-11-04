let score = "33"
// let score = "33abc"
// let score = null
// let score = undefined
// let score = true

console.log(typeof(score));

let valueInNumber = Number(score)

console.log(typeof(valueInNumber));
console.log(valueInNumber); 

/*
 "33" = 33
 "33abc" = NaN
 true = 1; false = 0
*/


let isLoggerIn = 1
// let isLoggerIn = 0
// let isLoggerIn = ""
// let isLoggerIn = "I am a boy"

let boolIsLoggedIn = Boolean(isLoggerIn)

console.log(typeof(boolIsLoggedIn));
console.log(boolIsLoggedIn);

/*
 "1" = true
 "" = false
 "name" = true
*/


let someNumber = 3123

let srtNumber = String(someNumber)

console.log(typeof(srtNumber));
console.log(srtNumber);