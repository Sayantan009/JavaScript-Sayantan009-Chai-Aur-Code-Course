const myArr = [0, 1, 3, 4, 5]
const nyArr2 = [1, 34, 21, 4]

console.log(myArr[2]);

const myHeros = new Array("Shaktiman", "IronMan")
console.log(myHeros[0]);

// Methods

// myArr.push(9) // pushes value to last of array
// myArr.pop() // removes the last element
// myArr.unshift(3) // pushes value to first
// myArr.shift() // removes the first element
// myArr.push(myArr.includes(2)) // if the value is in the array or not
// myArr.push(myArr.indexOf(654)) // returns the index of given value and returns -1 is value is not in array

// const newArr = myArr.join() // joins a array and forms a string

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // manipulates the original array and removes the values of the index
console.log("C ", myArr);
console.log(myn2); 