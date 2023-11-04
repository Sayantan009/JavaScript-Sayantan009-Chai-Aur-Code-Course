let score = "33"
// let score = "33abc"
// let score = null
// let score = undefined
// let score = true

console.log(typeof (score));

let valueInNumber = Number(score)

console.log(typeof (valueInNumber));
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

console.log(typeof (boolIsLoggedIn));
console.log(boolIsLoggedIn);

/*
 "1" = true
 "" = false
 "name" = true
*/


let someNumber = 3123

let srtNumber = String(someNumber)

console.log(typeof (srtNumber));
console.log(srtNumber);




// ************************* Operations *************************

let value = 3
let negValue = -value

// console.log(2+1);
// console.log(2-1);
// console.log(2*1);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);
// console.log(negValue);

let str1 = "Hitesh"
let str2 = "Hello"

console.log(str1 + str2);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(+true);
console.log(+"");

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2

gameCounter = 100
console.log(gameCounter);

// Go to mdn js prefix and postfix operator

gameCounter++
console.log(gameCounter);

++gameCounter
console.log(gameCounter);