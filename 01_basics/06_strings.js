const name = "Hitesh"
const repoCount = 50

// console.log(name + " has " + repoCount + " Repos "); //This is outdated syntax

console.log(`${name} has ${repoCount} repos`);

// const gameName = new String('HiteshChaiAurCode')
let gameName = 'Hitesh-Chai-Aur-Code'
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));
console.log(gameName.substring(0, 6));

const gameNameTwo = gameName.slice(-3, 4)
console.log(gameNameTwo);

const gameNameThree = "           hitesh          koli"
console.log(gameNameThree.trim());

const url = "https://google.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('hitesh'))

console.log(gameName.split("-"));





// String Methods
