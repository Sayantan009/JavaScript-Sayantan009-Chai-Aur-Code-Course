const score = 400
console.log(score);

const balance = new Number(100000)
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2));

const otherNumber = 23.5931123
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString("en-IN"));


// Maths
console.log(Math.abs(-213));
console.log(Math.round(13.5131));
console.log(Math.ceil(4.11111111));
console.log(Math.floor(4.6));
console.log(Math.sqrt(9));
console.log(Math.min(2, 34, 1, 213, -231));
console.log(Math.max(2, 34, 1, 213, -231));

console.log((Math.random()*10)+1);

const min = 1
const max = 6

const random = Math.floor(Math.random()*(max-min+1)+min)
console.log(random);
