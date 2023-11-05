const marvelHeros = ['Thor', 'IronMan', 'SpiderMan']
const dcHeros = ['SuperMan', 'BatMan', 'Flash']

// marvelHeros.push(dcHeros)
// console.log(marvelHeros);

// const combinedHeros = marvelHeros.concat(dcHeros)
// console.log(combinedHeros);

const allNewHeros = [...marvelHeros, ...dcHeros] // spread operator
console.log(allNewHeros);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realAnotherArr = anotherArr.flat(Infinity)

console.log(realAnotherArr);

console.log(Array.isArray({
    name: "Sayantan"
}))

console.log(Array.from("Hitesh"));
console.log(Array.from({name: "Hitesh"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));