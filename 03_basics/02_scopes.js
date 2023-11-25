let a = 10;
const b = 30;
var c = 50;
d = 0;

if (true) {
    let a = 120;
    const b = 350;
    var c = 470;
    d = 30;

    // console.log(`InSide Scope: ${a}`);
    // console.log(`InSide Scope: ${b}`);
    // console.log(`InSide Scope: ${c}`);
    // console.log(`InSide Scope: ${d}`);
}

// console.log(`OutSide Scope: ${a}`);
// console.log(`OutSide Scope: ${b}`);
// console.log(`OutSide Scope: ${c}`);
// console.log(`OutSide Scope: ${d}`);

// **********************************************************************************************************

function one() {
    const username = "Hitesh"
    function two() {
        console.log(username);
        const website = "youtube.com"
    }
    // console.log(website);
    two()
}
// one()


if (true) {
    let username = "Hitesh"
    if (true) {
        let website = " youtube"
        console.log(`${username} ${website}`);
    }
    // console.log(website);
}
// console.log(username);


// ********************* Interesting ***********************
console.log(addOne(21));
function addOne(value) {
    return value + 1;
};


// console.log(addTwo(32));
const addTwo = function(num){
    return num + 2
}

console.log(addTwo(32));