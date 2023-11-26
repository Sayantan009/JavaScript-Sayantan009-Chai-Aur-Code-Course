// If statement (<, >, <=, >=, ==, ===, !=, !==)
const isUserLoggedIn = true;
const temp = 41;

if (isUserLoggedIn === true) {
    // console.log(`User logged in!!!`);
}


if ("2" == 2) {
    // console.log(`Executed!`);
}


if ("2" !== 3) {
    // console.log(`Executed!`);
}


if (temp < 50) {
    // console.log(`Less than 50`);
}
else{
    // console.log(`Greater than 50`);
}

const score = 200;

if (score > 100) {
    const power = "fly";
    // console.log(`user power: ${power}`);
}
// console.log(`user power: ${power}`); // concept of scope


const balance = 900;
// if (balance > 200) console.log(`Test`), console.log(`Test`); // Don't do this



// nesting
if (balance < 500) {
    // console.log(`Less than 500`);
}
else if (balance < 750) {
    // console.log(`Less than 750`);
}
else if (balance <= 900) {
    // console.log(`Less than or equal to 900`);
}
else{
    // console.log(`Greater than 900`);
}


const userLoggedIn = true
const debitCard = true
const bankBalance = true

if (userLoggedIn && debitCard && bankBalance) {
    console.log(`Allow to buy courses`);
}

const loggedInFromGoogle = false
const loggedInFromEmail = true

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log(`User logged in!!`);
}