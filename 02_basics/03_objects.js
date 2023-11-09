// Singleton - with constructor
// Object.create

// object literals

const mySym = Symbol("Key1")
const mySym2 = Symbol("Key2")

const jsUser = {
    name: "Sayantan",
    'full name': "Hitest Choudhory",
    age: 18,
    location: 'jaipur',
    email: 'hitesh@google.com',
    isLoggedIn: 'false',
    lastLoginDates: ['Monday', 'Saturday'],
    [mySym2]: 'Key2'
}

// console.log(jsUser["full name"]);

console.log(jsUser.email);
console.log(jsUser["email"]);

console.log(jsUser[mySym2]);
console.log(typeof(jsUser[mySym2]));

jsUser.email = "haris@chatgpt.com"


// Object.freeze(jsUser)

jsUser.email = "haris@microsoft.com"
console.log(jsUser);

jsUser.greeting = () => {
    console.log("Hello world!!");
}
jsUser.greeting2 = function() {
    console.log(`Hello js user, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());
