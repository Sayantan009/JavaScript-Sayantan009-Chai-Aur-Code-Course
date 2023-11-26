const userEmail = 'harry@openai.com'
const userArr = []
const userObj = {}

if (userEmail) {
    console.log("Got user email");
}
else{
    console.log("Didn't get user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// true, 1, "0", 'false', " ", function(){}, [], {}, 

if (userArr.length === 0) {
    console.log(`Checked!!!`);
}
if (Object.keys(userObj).length === 0) {
    console.log(`Object Checked!!!`);
}