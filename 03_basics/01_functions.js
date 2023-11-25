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

function userLoggedinMessage(username = "User#0009") {
    // if (username === undefined) {
    //     console.log("Enter a valid username!!");
    // }
    if (!undefined) {
        console.log("Enter a valid username!!");
    }
    else {
        return `${username} just logged in!!`
    }
};

console.log(userLoggedinMessage());




// ******************************************************************************************************

function calculateCartPrice(primary, secondary, ...num1) {
    return num1
}

console.log(calculateCartPrice(112, 231, 123, 1342, 6969));


// const userOne = {
//     user_name: "Hitesh",
//     price: 1231
// } 

function handleObject(anyObject) {
    return (`Username is ${anyObject.user_name} and cart price is ${anyObject.price}`)
}

// console.log(handleObject(userOne));
console.log(
    handleObject({
        user_name: "Hitesh",
        price: 1231
    }));


const myArray = [200, 400, 600]

function returnSecondValue(anyArray){
    return (anyArray[1])
}

console.log(returnSecondValue(myArray));