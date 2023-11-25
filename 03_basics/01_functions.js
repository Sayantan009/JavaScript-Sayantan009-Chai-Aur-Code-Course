function sayMyName() {
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("R");
    console.log("Y");
}

// sayMyName()


function addTwoNumbers(numOne, numTwo) {
    console.log(numOne + numTwo);

    let result = (numOne + numTwo);
    return result; // If we want to store it in a variable
};

// addTwoNumbers(18, 45);

// addTwoNumbers("34", 45);
// addTwoNumbers("Virat", 45);
// addTwoNumbers(null, 45);
// addTwoNumbers(NaN, 45);

const result = addTwoNumbers(4, 354);
// console.log(result);

function userLoggedinMessage(username = "User#0009"){
    // if (username === undefined) {
    //     console.log("Enter a valid username!!");
    // }
    if (!undefined) {
        console.log("Enter a valid username!!");
    }
    else{
        return `${username} just logged in!!`
    }
};

console.log(userLoggedinMessage());