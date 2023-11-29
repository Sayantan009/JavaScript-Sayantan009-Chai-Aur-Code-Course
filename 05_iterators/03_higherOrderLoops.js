const superHeroes = [
    'Iron Man',
    'Captain America',
    'Hulk',
    'Thor',
    'Spider-Man',
];

const greetings = "Hello World!!"

const myObject = {
    COC: "Clash of Clans",
    NFS: "Need for Speed",
    FF: "Free Fire",
    BGMI: "Battleground Mobile India",
    VALO: "Valorant",
}

// for of
for (const hero of superHeroes) {
    // console.log(hero);
}

for (const greet of greetings) {
    // console.log(greet);
}

// Map
const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR', 'France')

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, value);
}

// for (const [key, value] of myObject) {
//     console.log(key, value);
// } // we can not iterate an object with forof loop

// For in
for (const key in myObject) {
    // console.log(key, "=", myObject[key]);
}

for (const key in superHeroes) {
    // console.log(key, "=", superHeroes[key]);
}

// for (const key in map) {
//     // console.log(key);
// } // We cant


// For each
superHeroes.forEach(function (val) {
    // console.log(val);
});
superHeroes.forEach(element => {
    // console.log(element);
});

function printIt(item){
    // console.log(item);
}

superHeroes.forEach(printIt)

superHeroes.forEach((item, index, arrList)=>{
    // console.log(item, index, arrList)
})

const myCoding = [{
    lName: "JavaScript",
    lEx: ".js",
    lUse: "EveryWhere",
}, {
    lName: "Python",
    lEx: ".py",
    lUse: "EveryWhere",
},{
    lName: "java",
    lEx: ".java",
    lUse: "EveryWhere",
}]

myCoding.forEach((element, index) => {
    // console.log(element.lName);
});